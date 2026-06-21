// test/og-jsonld.test.ts
import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = resolve(import.meta.dirname, "..", "dist");

describe("OG images", () => {
  it("emits a valid PNG for a comparison", async () => {
    const buf = await readFile(resolve(OUT, "og/react-vs-vue3.png"));
    expect([buf[0], buf[1], buf[2], buf[3]]).toEqual([0x89, 0x50, 0x4e, 0x47]);
    expect(buf.length).toBeGreaterThan(1000);
  });
  it("compare page references its own OG image", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain(
      'property="og:image" content="https://component-party.dev/og/react-vs-vue3.png"',
    );
    expect(html).toContain(
      'property="twitter:image" content="https://component-party.dev/og/react-vs-vue3.png"',
    );
    expect(html).not.toContain('og:image" content="https://component-party.dev/banner2.png"');
  });
  it("home page og:image is banner2.png", async () => {
    const home = await readFile(resolve(OUT, "index.html"), "utf8");
    expect(home).toContain('og:image" content="https://component-party.dev/banner2.png"');
  });
});

describe("JSON-LD", () => {
  it("compare page has TechArticle with both frameworks, no stale date", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain('"@type":"TechArticle"');
    expect(html).toContain('"name":"React"');
    expect(html).toContain('"name":"Vue 3"');
    expect(html).not.toContain("2024-12-01");
  });
  it("home page has WebApplication without ItemList", async () => {
    const html = await readFile(resolve(OUT, "index.html"), "utf8");
    expect(html).toContain('"@type":"WebApplication"');
    expect(html).not.toContain("ItemList");
  });
});
