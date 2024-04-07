import { start } from "./app.js";

import path from "path";
import { fileURLToPath } from "url";
import { afterEach, beforeEach, test, expect } from "vitest";

let appInstance: Awaited<ReturnType<typeof start>>;

beforeEach(async () => {
  appInstance = await start(0);
});

afterEach(async () => {
  await appInstance.stop();
});
import fs from "fs/promises";
import { ShikiSchemaInput } from "@repo/shiki";

const filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const dirname = path.dirname(filename); // get the name of the directory

test("POST", async () => {
  const code = await fs.readFile(dirname + "/app.test.snippet.ts", "utf-8");
  const url = new URL(`http://localhost:${appInstance.port}/v1`);

  const schemaInput: ShikiSchemaInput = {
    code,
    lang: "ts",
    renderer: "rich",
    // htmlDoc: "1",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(schemaInput),
  });

  expect(res.status).toBe(200);

  expect(await res.text()).toMatchInlineSnapshot(`
    "<pre class="shiki shiki-themes github-light github-dark-dimmed twoslash lsp" style="background-color:#fff;--shiki-dark-bg:#22272e;color:#24292e;--shiki-dark:#adbac7" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> { </span><span style="color:#24292E;--shiki-dark:#ADBAC7"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> z</span></span></code></span>z</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7"> } </span><span style="color:#D73A49;--shiki-dark:#F47067">from</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "zod"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> </span><span style="color:#005CC5;--shiki-dark:#6CB6FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> foo</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "bar"</span></span></code></span>foo</span></span><span style="color:#D73A49;--shiki-dark:#F47067"> =</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "bar"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#6A737D;--shiki-dark:#768390">// ..</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> </span><span style="color:#005CC5;--shiki-dark:#6CB6FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> parsed</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span></span></code></span>parsed</span></span><span style="color:#D73A49;--shiki-dark:#F47067"> =</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> </span><span style="color:#24292E;--shiki-dark:#ADBAC7"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> z</span></span></code></span>z</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">function</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"> string</span><span style="color:#24292E;--shiki-dark:#ADBAC7">(</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB">params</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> ({</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    errorMap</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#6F42C1;--shiki-dark:#F69D50"> z</span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#F69D50">ZodErrorMap</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    invalid_type_error</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    required_error</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    description</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">} </span><span style="color:#D73A49;--shiki-dark:#F47067">&#x26;</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> {</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    coerce</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> true</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">}) </span><span style="color:#D73A49;--shiki-dark:#F47067">|</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">)</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#6F42C1;--shiki-dark:#F69D50"> z</span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#F69D50">ZodString</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">export</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> string</span></span></code></span>string</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">().</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">ZodType</span><span style="color:#D73A49;--shiki-dark:#F47067">&#x3C;</span><span style="color:#24292E;--shiki-dark:#ADBAC7">string, ZodStringDef, string</span><span style="color:#D73A49;--shiki-dark:#F47067">></span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB">parse</span><span style="color:#24292E;--shiki-dark:#ADBAC7">(data: unknown, params</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> Partial</span><span style="color:#D73A49;--shiki-dark:#F47067">&#x3C;</span><span style="color:#24292E;--shiki-dark:#ADBAC7">z.ParseParams</span><span style="color:#D73A49;--shiki-dark:#F47067">></span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">): string</span></span></code></span>parse</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">(</span><span style="color:#032F62;--shiki-dark:#96D0FF">"foo"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">);</span></span>
    <span class="line"></span></code></pre>"
  `);
});

test("GET", async () => {
  const code = await fs.readFile(dirname + "/app.test.snippet.ts", "utf-8");
  const url = new URL(`http://localhost:${appInstance.port}/v1`);

  const schemaInput: ShikiSchemaInput = {
    code,
    lang: "ts",
    renderer: "rich",
    // htmlDoc: "1",
  };
  for (const [key, value] of Object.entries(schemaInput)) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url);

  expect(res.status).toBe(200);

  expect(await res.text()).toMatchInlineSnapshot(`
    "<pre class="shiki shiki-themes github-light github-dark-dimmed twoslash lsp" style="background-color:#fff;--shiki-dark-bg:#22272e;color:#24292e;--shiki-dark:#adbac7" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> { </span><span style="color:#24292E;--shiki-dark:#ADBAC7"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> z</span></span></code></span>z</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7"> } </span><span style="color:#D73A49;--shiki-dark:#F47067">from</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "zod"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> </span><span style="color:#005CC5;--shiki-dark:#6CB6FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> foo</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "bar"</span></span></code></span>foo</span></span><span style="color:#D73A49;--shiki-dark:#F47067"> =</span><span style="color:#032F62;--shiki-dark:#96D0FF"> "bar"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#6A737D;--shiki-dark:#768390">// ..</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> </span><span style="color:#005CC5;--shiki-dark:#6CB6FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">const</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> parsed</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span></span></code></span>parsed</span></span><span style="color:#D73A49;--shiki-dark:#F47067"> =</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> </span><span style="color:#24292E;--shiki-dark:#ADBAC7"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">import</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> z</span></span></code></span>z</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">function</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"> string</span><span style="color:#24292E;--shiki-dark:#ADBAC7">(</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB">params</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> ({</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    errorMap</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#6F42C1;--shiki-dark:#F69D50"> z</span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#F69D50">ZodErrorMap</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    invalid_type_error</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    required_error</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    description</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> string</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">} </span><span style="color:#D73A49;--shiki-dark:#F47067">&#x26;</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> {</span></span>
    <span class="line"><span style="color:#E36209;--shiki-dark:#F69D50">    coerce</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> true</span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">;</span></span>
    <span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">}) </span><span style="color:#D73A49;--shiki-dark:#F47067">|</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">)</span><span style="color:#D73A49;--shiki-dark:#F47067">:</span><span style="color:#6F42C1;--shiki-dark:#F69D50"> z</span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#F69D50">ZodString</span></span>
    <span class="line"><span style="color:#D73A49;--shiki-dark:#F47067">export</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> string</span></span></code></span>string</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">().</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#24292E;--shiki-dark:#ADBAC7">ZodType</span><span style="color:#D73A49;--shiki-dark:#F47067">&#x3C;</span><span style="color:#24292E;--shiki-dark:#ADBAC7">string, ZodStringDef, string</span><span style="color:#D73A49;--shiki-dark:#F47067">></span><span style="color:#24292E;--shiki-dark:#ADBAC7">.</span><span style="color:#6F42C1;--shiki-dark:#DCBDFB">parse</span><span style="color:#24292E;--shiki-dark:#ADBAC7">(data: unknown, params</span><span style="color:#D73A49;--shiki-dark:#F47067">?:</span><span style="color:#24292E;--shiki-dark:#ADBAC7"> Partial</span><span style="color:#D73A49;--shiki-dark:#F47067">&#x3C;</span><span style="color:#24292E;--shiki-dark:#ADBAC7">z.ParseParams</span><span style="color:#D73A49;--shiki-dark:#F47067">></span><span style="color:#D73A49;--shiki-dark:#F47067"> |</span><span style="color:#005CC5;--shiki-dark:#6CB6FF"> undefined</span><span style="color:#24292E;--shiki-dark:#ADBAC7">): string</span></span></code></span>parse</span></span><span style="color:#24292E;--shiki-dark:#ADBAC7">(</span><span style="color:#032F62;--shiki-dark:#96D0FF">"foo"</span><span style="color:#24292E;--shiki-dark:#ADBAC7">);</span></span>
    <span class="line"></span></code></pre>"
  `);
});
