import { codeToHtml } from "shiki";
import { z } from "zod";

type Options = Parameters<typeof codeToHtml>[1];
const langs = [
  "js",
  "json",
  "jsx",
  "markdown",
  "ts",
  "tsx",
] as const satisfies Options["lang"][];

const booleanSchema = z
  .enum(["true", "false", "1", "0", "yes", "no"])
  .transform((value) => {
    switch (value) {
      case "true":
      case "1":
      case "yes":
        return true;
      case "false":
      case "0":
      case "no":
        return false;
    }
    throw new Error(`Invalid boolean ${value}`);
  });

export const shikiSchema = z.object({
  lang: z.enum(langs),
  theme: z.string().optional().default("github-dark"),
  code: z.string(),
  renderer: z.enum(["classic", "rich"]).default("rich"),
  htmlDoc: booleanSchema
    .default("0")
    .describe("If true, the output will be wrapped in a full HTML document"),
});

export type ShikiSchemaInput = z.input<typeof shikiSchema>;
export type ShikiSchemaOutput = z.output<typeof shikiSchema>;

export { codeToHtml } from "shiki";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://shiki.katt.dev";

export async function getShikiHtml(input: ShikiSchemaInput) {
  const url = new URL(baseUrl);
  url.pathname = "/v1";
  for (const [key, value] of Object.entries(input)) {
    url.searchParams.set(key, value);
  }

  console.log(url);

  await fetch(url);
  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error(
      `Failed to fetch ${url.toString()}: ${res.status}: ${await res.text()}`
    );
  }

  return await res.text();
}
