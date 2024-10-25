import nodePath from "node:path";
import { compressToURL } from "@matschik/lz-string";
import { getParameters } from "codesandbox/lib/api/define.js";

export default {
  vue3: (contentByFilename) => {
    const BASE_URL = "https://sfc.vuejs.org/#";

    function utoa(data) {
      return btoa(unescape(encodeURIComponent(data)));
    }

    function generateURLFromData(data) {
      return `${BASE_URL}${utoa(JSON.stringify(data))}`;
    }
    const data = Object.assign({}, contentByFilename, {
      "import-map.json": JSON.stringify({
        vue: "https://sfc.vuejs.org/vue.runtime.esm-browser.js",
      }),
    });
    const url = generateURLFromData(data);
    return url;
  },
  svelte5: async (contentByFilename, title) => {
    const BASE_URL = "https://svelte.dev/playground/untitled?version=5#";

    const filenames = Object.keys(contentByFilename);
    if (filenames.some((f) => f.includes(".html"))) {
      return;
    }

    const files = filenames.map((filename, index) => {
      const contents = contentByFilename[filename];
      const name = index === 0 ? "App.svelte" : nodePath.parse(filename).base;
      return {
        type: "file",
        name,
        basename: name,
        contents,
        text: true,
      };
    });

    const payload = { title, files };

    const hash = await compress_and_encode_text(JSON.stringify(payload));

    const url = `${BASE_URL}${hash}`;

    return url;
  },
  alpine: (contentByFilename) => {
    const BASE_URL =
      "https://codesandbox.io/api/v1/sandboxes/define?embed=1&parameters=";
    const BASE_PREFIX = `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Alpine.js Playground</title>\n    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>\n  </head>\n  <body>\n\n`;
    const BASE_SUFFIX = `\n  </body>\n</html>`;

    const parameters = getParameters({
      files: {
        ...contentByFilename,
        "package.json": {
          content: { dependencies: {} },
        },
        "index.html": {
          content:
            BASE_PREFIX +
            (contentByFilename["index.html"]?.content || "") +
            BASE_SUFFIX,
        },
        "sandbox.config.json": {
          content: '{\n  "template": "static"\n}',
        },
      },
    });

    return `${BASE_URL}${parameters}`;
  },
  solid: (contentByFilename) => {
    const BASE_URL = "https://playground.solidjs.com/#";
    const SOURCE_PREFIX = `import { render } from "solid-js/web";\n`;
    const getSourceSuffix = (componentName) =>
      `\n\nrender(() => <${componentName} />, document.getElementById("app"));\n`;

    function generateURLFromData(data) {
      return `${BASE_URL}${compressToURL(JSON.stringify(data))}`;
    }

    const data = Object.keys(contentByFilename).map((filename) => {
      const content = contentByFilename[filename];
      const parsedFilename = nodePath.parse(filename);
      const ext = parsedFilename.ext.split(".").pop();

      return {
        name: parsedFilename.name,
        type: ext === "jsx" ? "tsx" : ext,
        source: content.replaceAll(".jsx", ".tsx"),
      };
    });

    const mainFile = data[0];
    const mainComponentName = mainFile.name;
    mainFile.name = "main";
    mainFile.type = "tsx";
    mainFile.source =
      SOURCE_PREFIX + mainFile.source + getSourceSuffix(mainComponentName);

    return generateURLFromData(data);
  },
  marko: (contentByFilename) => {
    const BASE_URL = "https://markojs.com/playground/#";

    const data = Object.entries(contentByFilename).map(([path, content]) => ({
      name: nodePath.parse(path).base,
      path: `/components/${path}`,
      content,
    }));

    return BASE_URL + compressToURL(JSON.stringify(data));
  },
};

// method `compress_and_encode_text` from https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/src/routes/(authed)/playground/%5Bid%5D/gzip.js
async function compress_and_encode_text(input) {
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
