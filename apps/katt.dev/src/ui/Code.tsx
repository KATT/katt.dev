import { ShikiSchemaInput, getShikiHtml } from "@repo/shiki";
import fs from "fs/promises";

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
    props.code ??
    (await fs.readFile(`${process.cwd()}/${props.file}`, "utf-8"));

  const html = await getShikiHtml({ ...props, code });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
