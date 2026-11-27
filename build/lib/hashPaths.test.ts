import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { hashPaths } from "./hashPaths.ts";

async function fixture(): Promise<string> {
  const root = await mkdtemp(path.join(tmpdir(), "hash-paths-"));
  await mkdir(path.join(root, "dir", "nested"), { recursive: true });
  await writeFile(path.join(root, "dir", "a.txt"), "a");
  await writeFile(path.join(root, "dir", "nested", "b.txt"), "b");
  await writeFile(path.join(root, "single.ts"), "single");
  return root;
}

describe("hashPaths", () => {
  it("is stable for unchanged files", async () => {
    const root = await fixture();
    const entries = [path.join(root, "dir"), path.join(root, "single.ts")];
    expect(await hashPaths(entries)).toBe(await hashPaths(entries));
  });

  it("changes when a nested file changes", async () => {
    const root = await fixture();
    const entries = [path.join(root, "dir"), path.join(root, "single.ts")];
    const before = await hashPaths(entries);
    await writeFile(path.join(root, "dir", "nested", "b.txt"), "changed");
    expect(await hashPaths(entries)).not.toBe(before);
  });

  it("changes when a file is added", async () => {
    const root = await fixture();
    const before = await hashPaths([path.join(root, "dir")]);
    await writeFile(path.join(root, "dir", "c.txt"), "c");
    expect(await hashPaths([path.join(root, "dir")])).not.toBe(before);
  });
});
