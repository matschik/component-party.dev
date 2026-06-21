import { error } from "@sveltejs/kit";
import { matchFrameworkId } from "@frameworks";
import { parseComparison, createComparisonPath } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";
import snippetsImporterByFrameworkId from "$generated/framework/index.js";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  canonicalPairs().map(([a, b]) => ({ comparison: `${a}-vs-${b}` }));

export const load: PageLoad = async ({ params }) => {
  const ids = parseComparison(params.comparison);
  if (!ids) error(404, "Unknown framework comparison");
  const [a, b] = ids;
  // canonical-order guard: reject the inverse form (handled by _redirects in Task 5)
  if (`/compare/${params.comparison}/` !== createComparisonPath(a, b))
    error(404, "Non-canonical comparison");
  const fa = matchFrameworkId(a)!;
  const fb = matchFrameworkId(b)!;
  const pairs = await Promise.all(
    [a, b].map(async (id) => [id, (await snippetsImporterByFrameworkId[id]()).default] as const),
  );
  return {
    frameworkIds: [a, b] as [string, string],
    titleA: fa.title,
    titleB: fb.title,
    initialSnippets: Object.fromEntries(pairs),
  };
};
