import { codeToHtml } from 'shiki';
// import { transformerTwoslash } from '@shikijs/twoslash';
import { unstable_cache } from 'next/cache';

const toHtml = unstable_cache(
  async function (code: string) {
    return await codeToHtml(`console.log()`, {
      lang: 'ts',
      theme: 'github-dark-default',
      transformers: [
        // transformerTwoslash({}), // <-- here doesn't work
      ],
    });
  },
  ['codeToHtml'],
);

export async function Code(props: { code: string }) {
  return <div dangerouslySetInnerHTML={{ __html: await toHtml(props.code) }} />;
}
