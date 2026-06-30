import { frameworkVersions } from "@frameworks";

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
