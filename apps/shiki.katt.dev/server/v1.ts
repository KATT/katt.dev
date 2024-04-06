import {
  rendererClassic,
  rendererRich,
  transformerTwoslash,
} from "@shikijs/twoslash";
import express from "express";
import { LRUCache } from "lru-cache";
import { createHash } from "node:crypto";
import path from "path";
import { codeToHtml } from "shiki";
import { z } from "zod";
import { env } from "../env.js";
import { ROOT_DIR } from "./utils.js";
import { ShikiSchemaOutput, shikiSchema } from "@repo/shiki";

const getSchema = shikiSchema.or(
  z
    .object({
      hash: z.string(),
    })
    .transform((data, ctx): ShikiSchemaOutput => {
      const input = hashToInput.get(data.hash);
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

const hashToInput = new Map<string, ShikiSchemaOutput>();
const cache = new LRUCache({
  // ttl 1 year
  ttl: 1000 * 60 * 60 * 24 * 365,
  ttlAutopurge: false,
  fetchMethod: async (_input: string) => {
    const input = JSON.parse(_input) as ShikiSchemaOutput;
    const html = await codeToHtml(input.code, {
      lang: input.lang,
      theme: "github-dark-default",
      transformers: [
        transformerTwoslash({
          renderer:
            input.renderer === "rich" ? rendererRich() : rendererClassic(),
        }),
      ],
    });
    return html;
  },
});

export const v1Router = express.Router();

v1Router.get("/", async (req, res) => {
  if (env.AUTHORIZATION && req.headers.authorization !== env.AUTHORIZATION) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const input = getSchema.safeParse(req.query);

  if (!input.success) {
    return res.status(400).json({ error: input.error });
  }

  const html = await cache.fetch(JSON.stringify(input.data));

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

  hashToInput.set(hash, input.data);

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
