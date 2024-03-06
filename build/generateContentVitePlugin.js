import generateContent from "./lib/generateContent.js";
import { createFsCache } from "micache";
import { hashElement } from "folder-hash";
import chokidar from "chokidar";

const contentDirFsCache = await createFsCache("pluginGenerateFrameworkContent");

export default function pluginGenerateFrameworkContent() {
  const name = "generateFrameworkContent";

  function logInfo(...args) {
    console.info(`[${name}]`, ...args);
  }

  let buildIsRunning = false;

  async function build() {
    if (buildIsRunning) {
      return;
    }
    buildIsRunning = true;
    logInfo("Generating framework content files...");
    const contentDirHash =
      (await hashElement("content")).hash +
      (await hashElement("build")).hash +
      (await hashElement("frameworks.mjs")).hash;

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

  let fsContentWatcher;
  if (process.env.NODE_ENV === "development") {
    fsContentWatcher = chokidar.watch(["content"]).on("change", build);
  }

  return {
    name,
    async buildStart() {
      try {
        await build();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async buildEnd() {
      fsContentWatcher && (await fsContentWatcher.close());
    },
  };
}
