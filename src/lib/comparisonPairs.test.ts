import { describe, it, expect } from "vitest";
import { frameworkVersions } from "@frameworks";
import { canonicalPairs } from "./comparisonPairs";

describe("canonicalPairs", () => {
  const pairs = canonicalPairs();
  it("produces C(n,2) unordered pairs", () => {
    const n = frameworkVersions.length;
    expect(pairs.length).toBe((n * (n - 1)) / 2);
  });
  it("orders each pair by framework array position (canonical)", () => {
    const index = new Map(frameworkVersions.map((f, i) => [f.id, i]));
    for (const [a, b] of pairs) expect(index.get(a)!).toBeLessThan(index.get(b)!);
  });
  it("has no duplicates", () => {
    const keys = new Set(pairs.map(([a, b]) => `${a}|${b}`));
    expect(keys.size).toBe(pairs.length);
  });
});
