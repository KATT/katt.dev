import { Code } from '@/ui/Code';

export default async function Page() {
  return (
    <ul className="space-y-6">
      <Code code={`console.log()`} />
      <Code file={`/src/app/shiki/_snippet.ts`} />
    </ul>
  );
}