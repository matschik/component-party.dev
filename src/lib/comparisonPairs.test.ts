import { describe, it, expect } from "vitest";
import { frameworkVersions } from "#frameworks";
import { canonicalPairs, retiredComparisonSlugs } from "./comparisonPairs";

describe("canonicalPairs", () => {
  const pairs = canonicalPairs();
  it("produces C(n,2) unordered pairs", () => {
    const n = frameworkVersions.length;
    expect(pairs.length).toBe((n * (n - 1)) / 2);
  });
  it("orders a pair of 2 frameworks by array position, an upgrade pair by release", () => {
    const byId = new Map(frameworkVersions.map((f, i) => [f.id, { ...f, index: i }]));
    for (const [a, b] of pairs) {
      const [fa, fb] = [byId.get(a)!, byId.get(b)!];
      if (fa.family === fb.family) expect(fa.releaseDate < fb.releaseDate).toBe(true);
      else expect(fa.index).toBeLessThan(fb.index);
    }
  });
  it("has no duplicates", () => {
    const keys = new Set(pairs.map(([a, b]) => `${a}|${b}`));
    expect(keys.size).toBe(pairs.length);
  });
});

describe("upgrade pairs", () => {
  it("put the older release first", () => {
    const pairs = canonicalPairs().map(([a, b]) => `${a}-vs-${b}`);
    for (const slug of [
      "svelte4-vs-svelte5",
      "vue2-vs-vue3",
      "angularClassic-vs-angularRenaissance",
      "emberOctane-vs-emberPolaris",
      "solid1-vs-solid2",
      "aurelia1-vs-aurelia2",
    ]) {
      expect(pairs).toContain(slug);
    }
  });
});

describe("retiredComparisonSlugs", () => {
  const slugs = retiredComparisonSlugs();
  it("keeps the slugs published while Solid 1 was `solid`", () => {
    expect(slugs).toContain("react-vs-solid");
    expect(slugs).toContain("solid-vs-solid1");
  });
  it("keeps the newer-first slugs of upgrade pairs", () => {
    expect(slugs).toContain("svelte5-vs-svelte4");
    expect(slugs).toContain("solid2-vs-solid1");
  });
  it("never lists a canonical slug", () => {
    const canonical = new Set(canonicalPairs().map(([a, b]) => `${a}-vs-${b}`));
    expect(slugs.filter((slug) => canonical.has(slug))).toEqual([]);
  });
});
