import { codeToHtml } from 'shiki';
// import { transformerTwoslash } from '@shikijs/twoslash';
import { unstable_cache } from 'next/cache';

const toHtml = unstable_cache(
  async function (code: string) {
    return await codeToHtml(code, {
      lang: 'ts',
      theme: 'github-dark-default',
      transformers: [
        // transformerTwoslash({}), // <-- here doesn't work
      ],
    });
  },
  ['codeToHtml'],
);

export async function Code(
  props:
    | { code: string; path?: never }
    | {
        code?: never;
        path: string;
      },
) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: await toHtml(props.code as string) }}
    />
  );
}
