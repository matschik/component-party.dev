import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = resolve(import.meta.dirname, "..", "dist");

describe("prerender (C1)", () => {
  it("bakes real snippet code into the static comparison HTML", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain("Reactivity"); // section title, server-rendered
    expect(html).toContain("Declare state"); // snippet title
    expect(html).toContain('class="shiki'); // highlighted code present
    expect(html).not.toMatch(/<div id="app"[^>]*>\s*<\/div>/); // not an empty shell
  });

  it("includes the canonical comparison URL", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain(
      'rel="canonical" href="https://component-party.dev/compare/react-vs-vue3/"',
    );
  });
});
