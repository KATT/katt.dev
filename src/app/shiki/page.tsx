import { Code } from '@/ui/Code';
import { unstable_cache } from 'next/cache';

const code = unstable_cache(async function () {}, ['codeToHtml']);
export default async function Page() {
  return <Code code={`console.log()`} />;
}
