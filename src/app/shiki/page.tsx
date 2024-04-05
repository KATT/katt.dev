import { codeToHtml } from 'shiki';
import { transformerTwoslash } from '@shikijs/twoslash';
import { unstable_cache } from 'next/cache';

const code = unstable_cache(async function () {}, ['codeToHtml']);
export default async function Page() {
  const html = await codeToHtml(`console.log()`, {
    lang: 'ts',
    theme: 'github-dark-default',
    transformers: [
      // transformerTwoslash({}), // <-- here doesn't work
      // ...
    ],
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
