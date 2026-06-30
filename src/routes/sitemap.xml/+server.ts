import { BASE_URL, createComparisonPath } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";

export const prerender = true;

export function GET() {
  const urls = [
    `${BASE_URL}/`,
    ...canonicalPairs().map(([a, b]) => `${BASE_URL}${createComparisonPath(a, b)}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
