import { frameworkVersions, retiredVersionIds } from "#frameworks";

export function canonicalPairs(): [string, string][] {
  const ids = frameworkVersions.map((f) => f.id);
  const pairs: [string, string][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push([ids[i], ids[j]]);
    }
  }
  return pairs;
}

/**
 * Comparison slugs published under a version id that was later renamed, e.g.
 * `react-vs-solid` before Solid 1 became `solid1`. Shared links still point at
 * their images, so the OG route keeps rendering them.
 */
export function retiredComparisonSlugs(): string[] {
  const slugs: string[] = [];
  for (const [a, b] of canonicalPairs()) {
    for (const [retiredId, currentId] of Object.entries(retiredVersionIds)) {
      if (a === currentId) slugs.push(`${retiredId}-vs-${b}`);
      if (b === currentId) slugs.push(`${a}-vs-${retiredId}`);
    }
  }
  return slugs;
}
