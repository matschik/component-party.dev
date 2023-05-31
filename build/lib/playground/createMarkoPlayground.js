import nodePath from "node:path";
import { compressToURL } from "@matschik/lz-string";

const BASE = "https://markojs.com/playground/#";

export default function createMarkoPlayground() {
  return {
    fromContentByFilename(contentByFilename) {
      const data = Object.entries(contentByFilename).map(([path, content]) => ({
        name: nodePath.parse(path).base,
        path: `/components/${path}`,
        content,
      }));

      return BASE + compressToURL(JSON.stringify(data));
    },
  };
}
