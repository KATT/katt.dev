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
import { ROOT_DIR, run } from "./utils.js";

import { Redis } from "ioredis";

type Storage = {
  getHash: (hash: string) => Promise<ShikiSchemaOutput | null>;
  setHash: (hash: string, data: ShikiSchemaOutput) => Promise<void>;
  getResult: (data: ShikiSchemaOutput) => Promise<string | null>;
  storeResult: (data: ShikiSchemaOutput, html: string) => Promise<void>;
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
        return redis.get(JSON.stringify(data));
      },
      async storeResult(data, html) {
        await redis.set(JSON.stringify(data), html);
      },
    };
    return redisStorage;
  }
  const hashToInput = new Map<string, ShikiSchemaOutput>();
  const results = new Map<string, string>();
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
    async storeResult(data, html) {
      const key = JSON.stringify(data);
      results.set(key, html);
    },
  };
  return mockStorage;
});

const getSchema = shikiSchema.or(
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
);

export const v1Router = express.Router();

v1Router.get("/", async (req, res) => {
  if (env.AUTHORIZATION && req.headers.authorization !== env.AUTHORIZATION) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const input = getSchema.safeParse(req.query);

  if (!input.success) {
    return res.status(400).json({ error: input.error });
  }

  let html = await storage.getResult(input.data);

  if (!html) {
    html = await codeToHtml(input.data.code, {
      lang: input.data.lang,
      theme: "github-dark-default",
      transformers: [
        transformerTwoslash({
          renderer:
            input.data.renderer === "rich" ? rendererRich() : rendererClassic(),
        }),
      ],
    });
    await storage.storeResult(input.data, html);
  }

  // send html with cache for 1 year
  const oneYearInSeconds = 60 * 60 * 24 * 365;
  // vary based on headers auth
  res.setHeader("Vary", "Authorization");
  res.setHeader("Cache-Control", `public, max-age=${oneYearInSeconds}`);
  res.setHeader("Content-Type", "text/html");

  const styleSheet = `<link rel="stylesheet" href="/v1/style-${input.data.renderer}.css" />`;
  const withBody = input.data.htmlDoc
    ? `<!DOCTYPE html><html lang="en"><head>${styleSheet}</head><body>${html}</body></html>`
    : html;
  return res.send(withBody);
});

v1Router.post("/", async (req, res) => {
  const input = shikiSchema.safeParse(req.body);

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
