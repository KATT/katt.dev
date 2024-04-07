import { ShikiSchemaInput, getShikiHtml } from "@repo/shiki";
import fs from "fs/promises";

import "@shikijs/twoslash/style-classic.css";
import "@shikijs/twoslash/style-rich.css";
import "./Code.css";
import { Suspense } from "react";

async function Render(props: ShikiSchemaInput) {
  const html = await getShikiHtml(props);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="not-prose" />
  );
}
export async function Code(
  props: Omit<ShikiSchemaInput, "code"> &
    (
      | {
          code: string;
          file?: never;
        }
      | {
          code?: never;
          file: string;
        }
    )
) {
  const code =
    props.code ?? (await fs.readFile(`${process.cwd()}${props.file}`, "utf-8"));

  return (
    <Suspense fallback={<pre>{props.code}</pre>}>
      <Render {...props} code={code} />
    </Suspense>
  );
}
