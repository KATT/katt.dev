import { ShikiSchemaInput } from "@repo/shiki";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import waitPort from "wait-port";

await waitPort({
  port: 3001,
});

const filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const dirname = path.dirname(filename); // get the name of the directory

const code = await fs.readFile(dirname + "/test.snippet.ts", "utf-8");

const schemaInput: ShikiSchemaInput = {
  code,
  lang: "ts",
  renderer: "rich",
  htmlDoc: "1",
};
{
  console.log("<POST>");
  const url = new URL("http://localhost:3000/v1");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(schemaInput),
  });

  console.log("-------- headers -------");
  console.table(Object.fromEntries(res.headers));

  console.log("-------- output --------");

  console.log(await res.text());

  console.log("url", res.url);
  console.log("</POST>");
}
{
  console.log("<GET>");

  const url = new URL("http://localhost:3001/v1");
  for (const [key, value] of Object.entries(schemaInput)) {
    url.searchParams.set(key, value);
  }

  console.log(url);

  const res = await fetch(url);

  console.log("-------- headers -------");
  console.table(Object.fromEntries(res.headers));

  console.log("-------- output --------");
  console.log(await res.text());

  console.log("url", res.url);
  console.log("</GET>");
}
