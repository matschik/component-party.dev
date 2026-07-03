import { frameworkVersions, frameworks } from "../frameworks.ts";

/**
 * Every non-canonical URL form that should 301 to a canonical comparison page.
 *
 * The canonical page for a pair is `/compare/{a}-vs-{b}/`, where `a` precedes
 * `b` in `frameworkVersions` order and both are concrete version ids. Google has
 * historically indexed URLs that no longer match that exact shape:
 *   - inverse order (`b-vs-a`),
 *   - family-name aliases (`svelte`→`svelte5`, `vue`→`vue3`, `angular`→
 *     `angularRenaissance`, `ember`→`emberPolaris`, `aurelia`→`aurelia2`),
 *   - and any of the above without the trailing slash.
 * Each of those 404s today because the redirect file only covered inverse pairs
 * with a trailing slash. This enumerates the full alias × order × slash matrix so
 * those legacy URLs 301 to the live page instead of dropping to the 404 fallback.
 *
 * Canonical URLs themselves are never emitted as a source: a `_redirects` rule
 * shadows the matching static asset, so redirecting a real page would break it.
 * The bare (no-slash) canonical form is left to Cloudflare's own 308 handling.
 */
export function buildRedirectLines(): string[] {
  const versions = frameworkVersions.map((f) => f.id);

  // A version id plus any family whose latest stable release is that version,
  // e.g. svelte5 → ["svelte5", "svelte"]; react → ["react"] (family id === version id).
  const aliasesFor = (versionId: string): string[] => {
    const set = new Set<string>([versionId]);
    for (const family of frameworks) {
      if (family.latestStable === versionId) set.add(family.id);
    }
    return [...set];
  };

  const lines: string[] = [];
  const seenSources = new Set<string>();

  for (let i = 0; i < versions.length; i++) {
    for (let j = i + 1; j < versions.length; j++) {
      const a = versions[i];
      const b = versions[j];
      const canonicalSlug = `${a}-vs-${b}`;
      const canonicalPath = `/compare/${canonicalSlug}/`;

      for (const x of aliasesFor(a)) {
        for (const y of aliasesFor(b)) {
          for (const slug of [`${x}-vs-${y}`, `${y}-vs-${x}`]) {
            if (slug === canonicalSlug) continue; // never shadow the real page
            for (const source of [`/compare/${slug}/`, `/compare/${slug}`]) {
              if (seenSources.has(source)) continue;
              seenSources.add(source);
              lines.push(`${source} ${canonicalPath} 301`);
            }
          }
        }
      }
    }
  }

  return lines;
}
