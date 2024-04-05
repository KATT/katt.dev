import { codeToHtml } from 'shiki';
import { transformerTwoslash } from '@shikijs/twoslash';
import fs from 'fs/promises';
import { unstable_cache } from 'next/cache';

const toHtml = unstable_cache(
  async function (code: string) {
    return await codeToHtml(code, {
      lang: 'ts',
      theme: 'github-dark-default',
      transformers: [
        transformerTwoslash({}), // <-- here doesn't work
      ],
    });
  },
  ['codeToHtml'],
);

export async function Code(
  props:
    | {
        code: string;
        file?: never;
      }
    | {
        code?: never;
        file: string;
      },
) {
  const code =
    props.code ??
    (await fs.readFile(`${process.cwd()}/${props.file}`, 'utf-8'));
  const html = await toHtml(code);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
