import { frameworkVersions, orderPair } from "#frameworks";
import { legacyOgSlugs } from "./legacyOgSlugs.ts";

export function canonicalPairs(): [string, string][] {
  const ids = frameworkVersions.map((f) => f.id);
  const pairs: [string, string][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push(orderPair(ids[i], ids[j]));
    }
  }
  return pairs;
}

/**
 * OG image slugs that were published once and are no longer canonical: the
 * former `solid` id (Solid 1 before Solid 2) and the newer-first order of
 * upgrade pairs. Shared links still point at these images, so the OG route
 * keeps rendering them.
 */
export function retiredComparisonSlugs(): string[] {
  const canonical = new Set(canonicalPairs().map(([a, b]) => `${a}-vs-${b}`));
  return legacyOgSlugs.filter((slug) => !canonical.has(slug));
}
