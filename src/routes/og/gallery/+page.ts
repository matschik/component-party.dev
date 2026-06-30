import { dev } from "$app/environment";
import { error } from "@sveltejs/kit";
import { matchFrameworkId } from "@frameworks";
import { canonicalPairs } from "$lib/comparisonPairs";
import type { PageLoad } from "./$types";

// Dev-only preview page: never shipped to the static build, and 404s if somehow
// reached in production (e.g. via the SPA fallback).
export const prerender = false;

export const load: PageLoad = () => {
  if (!dev) error(404, "Not available in production");

  const items = canonicalPairs().map(([a, b]) => {
    const fa = matchFrameworkId(a);
    const fb = matchFrameworkId(b);
    const comparison = `${a}-vs-${b}`;
    return {
      comparison,
      ogUrl: `/og/${comparison}.png`,
      label: `${fa?.title ?? a} vs ${fb?.title ?? b}`,
    };
  });

  return { items };
};
