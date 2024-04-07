import { ShikiSchemaOutput, shikiSchema } from "@repo/shiki";
import {
  rendererClassic,
  rendererRich,
  transformerTwoslash,
} from "@shikijs/twoslash";
import express from "express";
import { createHash } from "node:crypto";
import path from "path";
import { codeToHtml } from "shiki";
import { z } from "zod";
import { env } from "../env.js";
import { ROOT_DIR, dedupe, run } from "./utils.js";

import { Redis } from "ioredis";

type Result =
  | {
      error?: never;
      html: string;
    }
  | {
      error: {
        message: string;
        stack?: string;
      };
      html?: never;
    };

type Storage = {
  getHash: (hash: string) => Promise<ShikiSchemaOutput | null>;
  setHash: (hash: string, data: ShikiSchemaOutput) => Promise<void>;
  getResult: (data: ShikiSchemaOutput) => Promise<Result | null>;
  setResult: (data: ShikiSchemaOutput, html: Result) => Promise<void>;
};

const storage = run((): Storage => {
  if (env.REDIS_URL) {
    const redis = new Redis(env.REDIS_URL);
    const redisStorage: Storage = {
      async getHash(hash) {
        const data = await redis.get(hash);
        return data ? JSON.parse(data) : null;
      },
      async setHash(hash, data) {
        await redis.set(hash, JSON.stringify(data));
      },
      async getResult(data) {
        const value = await redis.get(JSON.stringify(data));
        return value ? JSON.parse(value) : null;
      },
      async setResult(data, html) {
        await redis.set(JSON.stringify(data), JSON.stringify(html));
      },
    };
    return redisStorage;
  }
  const hashToInput = new Map<string, ShikiSchemaOutput>();
  const results = new Map<string, Result>();
  const mockStorage: Storage = {
    async getHash(hash) {
      return hashToInput.get(hash) ?? null;
    },
    async setHash(hash, data) {
      hashToInput.set(hash, data);
    },
    async getResult(data) {
      const key = JSON.stringify(data);
      return results.get(key) ?? null;
    },
    async setResult(data, html) {
      const key = JSON.stringify(data);
      results.set(key, html);
    },
  };
  return mockStorage;
});

const getSchema = shikiSchema
  .or(
    z
      .object({
        hash: z.string(),
      })
      .transform(async (data, ctx): Promise<ShikiSchemaOutput> => {
        const input = await storage.getHash(data.hash);
        if (!input) {
          ctx.addIssue({
            code: "custom",
            message: "Hash not found",
            path: ["hash"],
          });
          return z.NEVER;
        }
        return input;
      })
  )
  .transform((data) => ({
    _version: 0.1,
    ...data,
  }));

export const v1Router = express.Router();

const codeToHtmlDeduped = dedupe(
  async (input: ShikiSchemaOutput): Promise<Result> => {
    let result = await storage.getResult(input);
    if (result) {
      return result;
    }
    try {
      const html = await codeToHtml(input.code, {
        lang: input.lang,
        themes: {
          light: "github-light-default",
          dark: "github-dark-default",
        },
        transformers: [
          transformerTwoslash({
            renderer:
              input.renderer === "rich" ? rendererRich() : rendererClassic(),
          }),
        ],
      });
      result = { html };
    } catch (cause) {
      const error = cause as Error;
      result = {
        error: {
          message: error.message,
          stack: error.stack,
        },
      };
    }

    await storage.setResult(input, result);

    return result;
  }
);

v1Router.get("/", async (req, res) => {
  if (env.AUTHORIZATION && req.headers.authorization !== env.AUTHORIZATION) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const parsed = await getSchema.safeParseAsync(req.query);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error });
  }
  const input = parsed.data;

  const result = await codeToHtmlDeduped(input);
  if (result.error) {
    res.setHeader("Content-Type", "text/markdown");
    return res.status(422).send(result.error.message);
  }

  // send html with cache for 1 year
  const oneYearInSeconds = 60 * 60 * 24 * 365;
  // vary based on headers auth
  res.setHeader("Vary", "Authorization");
  res.setHeader("Cache-Control", `public, max-age=${oneYearInSeconds}`);
  res.setHeader("Content-Type", "text/html");

  const withBody: string = input.htmlDoc
    ? [
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `<head>`,
        `  <link rel="stylesheet" href="/v1/style-${input.renderer}.css" />`,
        `</head>`,
        `  <body>${result.html}`,
        `  </body>`,
        `</html>`,
      ].join("\n")
    : result.html;
  return res.send(withBody);
});

v1Router.post("/", async (req, res) => {
  const input = await shikiSchema.safeParseAsync(req.body);

  if (!input.success) {
    return res.status(400).json({ error: input.error });
  }

  // create sha256 hash of the input
  const hash = createHash("sha256")
    .update(JSON.stringify(input.data))
    .digest("hex");

  // store the input
  await storage.setHash(hash, input.data);

  // redirect to the hash
  return res.redirect(303, `/v1?hash=${hash}`);
});

v1Router.get("/style-rich.css", async (req, res) => {
  const fileName = path.resolve(
    ROOT_DIR,
    "node_modules/@shikijs/twoslash/style-rich.css"
  );
  res.sendFile(fileName);
});

v1Router.get("/style-classic.css", async (req, res) => {
  const fileName = path.resolve(
    ROOT_DIR,
    "node_modules/@shikijs/twoslash/style-classic.css"
  );
  res.sendFile(fileName);
});
