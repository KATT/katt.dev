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
