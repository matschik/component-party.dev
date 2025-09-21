import fs from "node:fs/promises";
import path from "node:path";
import { frameworks } from "../frameworks.ts";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const footer = `</urlset>`;

  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `${header}\n${urlEntries}\n${footer}`;
}

function generateFrameworkCombinations(): string[] {
  const combinations: string[] = [];

  // Add main page
  combinations.push("https://component-party.dev/");

  // Add individual framework pages
  for (const framework of frameworks) {
    combinations.push(`https://component-party.dev/?f=${framework.id}`);
  }

  // Add popular two-framework combinations
  const popularFrameworks = [
    "react",
    "vue3",
    "angularRenaissance",
    "svelte5",
    "solid",
  ];
  for (let i = 0; i < popularFrameworks.length; i++) {
    for (let j = i + 1; j < popularFrameworks.length; j++) {
      combinations.push(
        `https://component-party.dev/?f=${popularFrameworks[i]},${popularFrameworks[j]}`,
      );
    }
  }

  // Add some three-framework combinations
  const threeFrameworkCombos = [
    ["react", "vue3", "angularRenaissance"],
    ["react", "svelte5", "solid"],
    ["vue3", "svelte5", "solid"],
    ["react", "vue3", "svelte5"],
  ];

  for (const combo of threeFrameworkCombos) {
    combinations.push(`https://component-party.dev/?f=${combo.join(",")}`);
  }

  // Add version comparison pages
  const versionComparisons = [
    ["svelte4", "svelte5"],
    ["vue2", "vue3"],
    ["angular", "angularRenaissance"],
    ["aurelia1", "aurelia2"],
    ["emberOctane", "emberPolaris"],
  ];

  for (const [v1, v2] of versionComparisons) {
    combinations.push(`https://component-party.dev/?f=${v1},${v2}`);
  }

  return combinations;
}

async function generateSitemap(): Promise<void> {
  const baseUrl = "https://component-party.dev";
  const currentDate = new Date().toISOString().split("T")[0];

  const urls: SitemapUrl[] = generateFrameworkCombinations().map((loc) => ({
    loc,
    lastmod: currentDate,
    changefreq: "weekly" as const,
    priority: loc === `${baseUrl}/` ? 1.0 : 0.8,
  }));

  const sitemapXml = generateSitemapXml(urls);

  // Write to public directory
  const publicDir = path.join(import.meta.dirname, "..", "public");
  const sitemapPath = path.join(publicDir, "sitemap.xml");

  await fs.writeFile(sitemapPath, sitemapXml, "utf8");
  console.log(`Generated sitemap with ${urls.length} URLs at ${sitemapPath}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap().catch(console.error);
}

export default generateSitemap;
