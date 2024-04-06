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
    "<pre class="shiki github-dark-default twoslash lsp" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { </span><span style="color:#E6EDF3"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> z</span></span></code></span>z</span></span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> "zod"</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> </span><span style="color:#79C0FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> foo</span><span style="color:#FF7B72">:</span><span style="color:#A5D6FF"> "bar"</span></span></code></span>foo</span></span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> "bar"</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#8B949E">// ..</span></span>
    <span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> </span><span style="color:#79C0FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> parsed</span><span style="color:#FF7B72">:</span><span style="color:#79C0FF"> string</span></span></code></span>parsed</span></span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> </span><span style="color:#E6EDF3"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> z</span></span></code></span>z</span></span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> string</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">params</span><span style="color:#FF7B72">?:</span><span style="color:#E6EDF3"> ({</span></span>
    <span class="line"><span style="color:#FFA657">    errorMap</span><span style="color:#FF7B72">?:</span><span style="color:#FFA657"> z</span><span style="color:#E6EDF3">.</span><span style="color:#FFA657">ZodErrorMap</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    invalid_type_error</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    required_error</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    description</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#E6EDF3">} </span><span style="color:#FF7B72">&#x26;</span><span style="color:#E6EDF3"> {</span></span>
    <span class="line"><span style="color:#FFA657">    coerce</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> true</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">|</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">:</span><span style="color:#FFA657"> z</span><span style="color:#E6EDF3">.</span><span style="color:#FFA657">ZodString</span></span>
    <span class="line"><span style="color:#FF7B72">export</span><span style="color:#E6EDF3"> string</span></span></code></span>string</span></span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#E6EDF3">ZodType</span><span style="color:#FF7B72">&#x3C;</span><span style="color:#E6EDF3">string, ZodStringDef, string</span><span style="color:#FF7B72">></span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">parse</span><span style="color:#E6EDF3">(data: unknown, params</span><span style="color:#FF7B72">?:</span><span style="color:#E6EDF3"> Partial</span><span style="color:#FF7B72">&#x3C;</span><span style="color:#E6EDF3">z.ParseParams</span><span style="color:#FF7B72">></span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">): string</span></span></code></span>parse</span></span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"foo"</span><span style="color:#E6EDF3">);</span></span>
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
    "<pre class="shiki github-dark-default twoslash lsp" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { </span><span style="color:#E6EDF3"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> z</span></span></code></span>z</span></span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> "zod"</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> </span><span style="color:#79C0FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> foo</span><span style="color:#FF7B72">:</span><span style="color:#A5D6FF"> "bar"</span></span></code></span>foo</span></span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> "bar"</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#8B949E">// ..</span></span>
    <span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> </span><span style="color:#79C0FF"><span class="twoslash-hover twoslash-query-presisted"><span class="twoslash-popup-container"><div class="twoslash-popup-arrow"></div><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> parsed</span><span style="color:#FF7B72">:</span><span style="color:#79C0FF"> string</span></span></code></span>parsed</span></span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> </span><span style="color:#E6EDF3"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> z</span></span></code></span>z</span></span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> string</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">params</span><span style="color:#FF7B72">?:</span><span style="color:#E6EDF3"> ({</span></span>
    <span class="line"><span style="color:#FFA657">    errorMap</span><span style="color:#FF7B72">?:</span><span style="color:#FFA657"> z</span><span style="color:#E6EDF3">.</span><span style="color:#FFA657">ZodErrorMap</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    invalid_type_error</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    required_error</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#FFA657">    description</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> string</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#E6EDF3">} </span><span style="color:#FF7B72">&#x26;</span><span style="color:#E6EDF3"> {</span></span>
    <span class="line"><span style="color:#FFA657">    coerce</span><span style="color:#FF7B72">?:</span><span style="color:#79C0FF"> true</span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">;</span></span>
    <span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">|</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">:</span><span style="color:#FFA657"> z</span><span style="color:#E6EDF3">.</span><span style="color:#FFA657">ZodString</span></span>
    <span class="line"><span style="color:#FF7B72">export</span><span style="color:#E6EDF3"> string</span></span></code></span>string</span></span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span class="line"><span style="color:#E6EDF3">ZodType</span><span style="color:#FF7B72">&#x3C;</span><span style="color:#E6EDF3">string, ZodStringDef, string</span><span style="color:#FF7B72">></span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">parse</span><span style="color:#E6EDF3">(data: unknown, params</span><span style="color:#FF7B72">?:</span><span style="color:#E6EDF3"> Partial</span><span style="color:#FF7B72">&#x3C;</span><span style="color:#E6EDF3">z.ParseParams</span><span style="color:#FF7B72">></span><span style="color:#FF7B72"> |</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">): string</span></span></code></span>parse</span></span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">"foo"</span><span style="color:#E6EDF3">);</span></span>
    <span class="line"></span></code></pre>"
  `);
});
