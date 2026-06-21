import fs from "node:fs/promises";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import { frameworkVersions } from "../frameworks.ts";

// canonicalPairs() uses the @frameworks alias which resolves at runtime via
// the alias configured in svelte.config.js. For the Vite plugin (Node context)
// we resolve it directly from the raw frameworks import, mirroring the same logic.
function buildCanonicalPairs(): [string, string][] {
  const ids = frameworkVersions.map((f) => f.id);
  const pairs: [string, string][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push([ids[i], ids[j]]);
    }
  }
  return pairs;
}

export default function generateRedirectsVitePlugin(): Plugin {
  let resolvedOutDir = "dist";

  return {
    name: "generate-redirects",
    apply: "build" as const,
    configResolved(config: ResolvedConfig) {
      const outDir = config.build.outDir;
      // Resolve outDir absolutely against project root (it may be relative)
      resolvedOutDir = path.isAbsolute(outDir) ? outDir : path.resolve(config.root, outDir);
    },
    async closeBundle() {
      // Skip the SSR environment; write only once after the client build.
      if (this.environment?.name !== "client") return;

      const pairs = buildCanonicalPairs();
      const lines = pairs.map(([a, b]) => `/compare/${b}-vs-${a}/ /compare/${a}-vs-${b}/ 301`);
      const outPath = path.join(resolvedOutDir, "_redirects");
      try {
        await fs.mkdir(resolvedOutDir, { recursive: true });
        await fs.writeFile(outPath, lines.join("\n") + "\n", "utf8");
        console.info(`[generate-redirects] Written ${lines.length} inverse redirects → _redirects`);
      } catch (err) {
        console.error("[generate-redirects] Failed to write _redirects:", err);
        throw err;
      }
    },
  };
}
