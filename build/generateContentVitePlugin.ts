import generateContent from "./lib/generateContent";
import { createFsCache } from "micache";
import { hashElement } from "folder-hash";
import chokidar, { type FSWatcher } from "chokidar";
import { disposeHighlighter } from "./lib/highlighter.ts";

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
    const contentDirHash =
      (await hashElement("content")).hash +
      (await hashElement("build")).hash +
      (await hashElement("frameworks.ts")).hash;

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
  if (process.env.NODE_ENV === "development") {
    fsContentWatcher = chokidar.watch(["content"]).on("change", build);
  }

  return {
    name,
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
