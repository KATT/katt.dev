import { Code } from "@/ui/Code";
import { Suspense } from "react";
export default async function Page() {
  return (
    <ul className="space-y-6">
      <Suspense>
        <Code code={`console.log()`} lang="ts" />
      </Suspense>
      <Suspense>
        <Code file={`/src/app/shiki/_snippet.ts`} lang="ts" />
      </Suspense>
    </ul>
  );
}
