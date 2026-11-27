import generateContent from "./lib/generateContent";
import { createFsCache } from "micache";
import chokidar, { type FSWatcher } from "chokidar";
import { disposeHighlighter } from "./lib/highlighter.ts";
import { hashPaths } from "./lib/hashPaths.ts";

const contentDirFsCache = await createFsCache("pluginGenerateFrameworkContent");

export default function pluginGenerateFrameworkContent() {
  const name = "generateFrameworkContent";

  function logInfo(...args: unknown[]) {
    console.info(`[${name}]`, ...args);
  }

  let buildIsRunning = false;

  async function build(): Promise<void> {
    if (buildIsRunning) {
      return;
    }
    buildIsRunning = true;
    logInfo("Generating framework content files...");
    const contentDirHash = await hashPaths(["content", "build", "frameworks.ts"]);

    const contentDirLastHash = await contentDirFsCache.get("contentDirHash");
    if (contentDirHash !== contentDirLastHash) {
      await generateContent();
      await contentDirFsCache.set("contentDirHash", contentDirHash);
      logInfo(`done`);
    } else {
      logInfo(`done with cache`);
    }
    buildIsRunning = false;
  }

  let fsContentWatcher: FSWatcher | undefined;

  return {
    name,
    configureServer(server: { httpServer?: { once(e: string, cb: () => void): void } }): void {
      fsContentWatcher = chokidar.watch(["content"]).on("change", build);
      server.httpServer?.once("close", () => {
        void fsContentWatcher?.close();
      });
    },
    async buildStart(): Promise<void> {
      try {
        await build();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async buildEnd(): Promise<void> {
      await fsContentWatcher?.close();
      // Dispose of highlighter instances to prevent memory leaks
      await disposeHighlighter();
    },
  };
}
