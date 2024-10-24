import path from "node:path";

export default function createSvelte5Playground() {
  const BASE_URL = "https://svelte.dev/playground?version=5#";

  async function fromContentByFilename(contentByFilename) {
    const files = Object.keys(contentByFilename).map((filename, index) => {
      const contents = contentByFilename[filename];
      const name = index === 0 ? "App.svelte" : path.parse(filename).base;
      return {
        type: "file",
        name,
        basename: name,
        contents,
        text: true,
      };
    });

    const hash = await compress_and_encode_text(JSON.stringify({ files }));

    const url = `${BASE_URL}${hash}`;

    return url;
  }

  return {
    fromContentByFilename,
  };
}

// method `compress_and_encode_text` from https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/src/routes/(authed)/playground/%5Bid%5D/gzip.js
export async function compress_and_encode_text(input) {
  const reader = new Blob([input])
    .stream()
    .pipeThrough(new CompressionStream("gzip"))
    .getReader();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) {
      reader.releaseLock();
      return btoa(buffer).replaceAll("+", "-").replaceAll("/", "_");
    } else {
      for (let i = 0; i < value.length; i++) {
        // decoding as utf-8 will make btoa reject the string
        buffer += String.fromCharCode(value[i]);
      }
    }
  }
}
