import { describe, it, expect } from "vitest";
import { buildRedirectLines } from "./redirects";
import { canonicalPairs } from "../src/lib/comparisonPairs";

const lines = buildRedirectLines();

/** source path -> redirect target, parsed from "<source> <target> 301". */
const targetBySource = new Map(
  lines.map((line) => {
    const [source, target] = line.split(" ");
    return [source, target] as const;
  }),
);

describe("buildRedirectLines", () => {
  // The exact URLs Google Search Console reported as 404 (Introuvable).
  it.each([
    ["/compare/react-vs-svelte5", "/compare/svelte5-vs-react/"], // inverse, no slash
    ["/compare/svelte4-vs-svelte5", "/compare/svelte5-vs-svelte4/"], // inverse, no slash
    ["/compare/aurelia1-vs-aurelia2", "/compare/aurelia2-vs-aurelia1/"], // inverse, no slash
    ["/compare/emberOctane-vs-emberPolaris", "/compare/emberPolaris-vs-emberOctane/"], // inverse, no slash
    ["/compare/react-vs-vue", "/compare/react-vs-vue3/"], // family alias, no slash
    ["/compare/angular-vs-solid", "/compare/angularRenaissance-vs-solid/"], // family alias, no slash
    ["/compare/react-vs-svelte", "/compare/svelte5-vs-react/"], // clean form of react-vs-svelte;
  ])("301s the legacy URL %s → %s", (source, target) => {
    expect(targetBySource.get(source)).toBe(target);
  });

  it("still covers the original inverse-with-slash redirects", () => {
    expect(targetBySource.get("/compare/react-vs-svelte5/")).toBe("/compare/svelte5-vs-react/");
  });

  it("emits both a slashed and unslashed source for every redirect target", () => {
    // react-vs-vue (family) should exist with and without a trailing slash.
    expect(targetBySource.has("/compare/react-vs-vue")).toBe(true);
    expect(targetBySource.has("/compare/react-vs-vue/")).toBe(true);
  });

  it("never redirects a canonical page onto itself (would shadow the real asset)", () => {
    const canonicalSources = new Set(
      canonicalPairs().flatMap(([a, b]) => [`/compare/${a}-vs-${b}/`, `/compare/${a}-vs-${b}`]),
    );
    for (const source of targetBySource.keys()) {
      expect(canonicalSources.has(source)).toBe(false);
    }
  });

  it("has no duplicate source paths", () => {
    const sources = lines.map((l) => l.split(" ")[0]);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it("every target is a real canonical comparison page", () => {
    const canonicalTargets = new Set(canonicalPairs().map(([a, b]) => `/compare/${a}-vs-${b}/`));
    for (const target of targetBySource.values()) {
      expect(canonicalTargets.has(target)).toBe(true);
    }
  });

  it("stays well under Cloudflare's 2,100 static-redirect limit", () => {
    expect(lines.length).toBeLessThan(2000);
  });
});
