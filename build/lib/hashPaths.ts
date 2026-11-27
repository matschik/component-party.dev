import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

async function listFiles(entry: string): Promise<string[]> {
  if (!(await stat(entry)).isDirectory()) {
    return [entry];
  }
  const entries = await readdir(entry, { recursive: true, withFileTypes: true });
  return entries
    .filter((dirent) => dirent.isFile())
    .map((dirent) => path.join(dirent.parentPath, dirent.name))
    .sort();
}

/** Hash the paths and contents of every file under the given files or folders. */
export async function hashPaths(entries: string[]): Promise<string> {
  const hash = createHash("sha256");
  for (const entry of entries) {
    for (const file of await listFiles(entry)) {
      hash
        .update(file)
        .update("\0")
        .update(await readFile(file))
        .update("\0");
    }
  }
  return hash.digest("base64");
}
