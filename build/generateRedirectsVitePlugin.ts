import fs from "node:fs/promises";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import { buildRedirectLines } from "./redirects.ts";

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

      const lines = buildRedirectLines();
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
