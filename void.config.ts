import { defineConfig } from "void/config";

/*
 * The only definition of the `component-party` Worker. Void writes the Wrangler
 * file from it at deploy time (generated, ignored by Git). Same pattern as
 * vel.studio.
 *
 * `inference` sends the site down Void's static path: Void runs `pnpm build`,
 * then ships `dist/` behind its own static entry, which answers the
 * `/__void/ready` probe and hands everything else to the assets service.
 */
export default defineConfig({
  inference: {
    appType: "static",
    outputDir: "dist",
    build: "pnpm build",
  },
  cloudflare: {
    name: "component-party",
    compatibility_date: "2026-10-01",
    // Void republishes these fields, so they state the wanted Worker: no
    // workers.dev URL and the apex as a Custom Domain. Void checks each new
    // version with its `/__void/ready` probe on the version's preview URL, so
    // `preview_urls` must stay on, or the probe fails and the old version stays.
    // This list replaces the Worker's own: a Custom Domain missing here is
    // deleted with its DNS record.
    routes: [{ pattern: "component-party.dev", custom_domain: true }],
    workers_dev: false,
    preview_urls: true,
    // Every route is prerendered. The assets service answers unknown URLs with
    // dist/404.html and applies dist/_redirects itself, without waking the Worker.
    assets: { directory: "./dist", not_found_handling: "404-page" },
    observability: { enabled: true },
  },
});
