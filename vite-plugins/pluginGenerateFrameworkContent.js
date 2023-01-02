import fs, { watch } from "fs";
import generateContent from "./lib/generateContent.js";
import { createFsCache } from "micache";
import { hashElement } from "folder-hash";

console.log(process.env.NODE_ENV);

const contentDirFsCache = await createFsCache("pluginGenerateFrameworkContent");

export default function pluginGenerateFrameworkContent() {
  const name = "generateFrameworkContent";

  function logInfo(...args) {
    console.info(`[${name}]`, ...args);
  }

  async function build() {
    logInfo("Generating framework content files...");
    const contentDirHash = (await hashElement("content")).hash;
    const contentDirLastHash = await contentDirFsCache.get("contentDirHash");
    if (contentDirHash !== contentDirLastHash) {
      await generateContent();
      await contentDirFsCache.set("contentDirHash", contentDirHash);
      logInfo(`done`);
    } else {
      logInfo(`done with cache`);
    }
  }

  let fsContentWatcher;
  if (process.env.NODE_ENV === "development") {
    fsContentWatcher = fs.watch("content", { recursive: true }, build);
  }

  return {
    name,
    async buildStart() {
      await build();
    },
    buildEnd() {
      fsContentWatcher && fsContentWatcher.close();
    },
  };
}
