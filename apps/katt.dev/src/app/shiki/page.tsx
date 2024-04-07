import { Code } from "@/ui/Code";
export default async function Page() {
  return (
    <main className="prose dark:prose-invert p-8">
      <h1>Shikiii code</h1>
      <h2>Default stuff</h2>
      <ul className="space-y-6">
        <Code code={`console.log()`} lang="ts" />
        <Code file={`/src/app/shiki/_snippet.ts`} lang="ts" />
      </ul>

      <h2>Classic</h2>
      <ul className="space-y-6">
        <Code code={`console.log()`} lang="ts" renderer="classic" />
        <Code
          file={`/src/app/shiki/_snippet.ts`}
          lang="ts"
          renderer="classic"
        />
      </ul>

      <h2>Markdown</h2>
      <ul className="space-y-6">
        <Code file={`/src/app/shiki/_snippet.md`} lang="markdown" />
      </ul>
    </main>
  );
}
