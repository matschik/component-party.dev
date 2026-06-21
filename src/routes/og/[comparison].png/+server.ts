import { error } from "@sveltejs/kit";
import { matchFrameworkId } from "@frameworks";
import { parseComparison } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";
import { renderComparisonOgPng } from "../../../../build/og/renderOgImage";
import type { EntryGenerator, RequestHandler } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  canonicalPairs().map(([a, b]) => ({ comparison: `${a}-vs-${b}` }));

export const GET: RequestHandler = async ({ params }) => {
  const ids = parseComparison(params.comparison);
  if (!ids) error(404, "Unknown framework comparison");
  const [a, b] = ids;
  const fa = matchFrameworkId(a)!;
  const fb = matchFrameworkId(b)!;
  const png = await renderComparisonOgPng({
    titleA: fa.title,
    titleB: fb.title,
    imgA: fa.img,
    imgB: fb.img,
  });
  return new Response(Buffer.from(png), {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=604800" },
  });
};
