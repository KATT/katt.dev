import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const run = <T>(fn: () => T) => fn();

export const ROOT_DIR = run(() => {
  const filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const dirname = path.dirname(filename); // get the name of the directory

  // find closest package.json
  function goUp(dir: string): string {
    const packageJson = path.resolve(dir, "package.json");
    if (fs.existsSync(packageJson)) {
      return dir;
    }
    return goUp(path.resolve(dir, ".."));
  }
  return goUp(dirname);
});

/**
 * Run a function and return the result, deduping the concurrent calls if the function is already running
 */
export function dedupe<TArgs extends any[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>
): (...args: TArgs) => Promise<TReturn> {
  const running = new Map<string, Promise<TReturn>>();
  return (...args) => {
    const key = JSON.stringify(args);
    let promise = running.get(key);
    if (promise) {
      return promise;
    }

    promise = run(async () => {
      try {
        return await fn(...args);
      } finally {
        running.delete(key);
      }
    });
    running.set(key, promise);

    return promise;
  };
}
