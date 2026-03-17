import nodePath from "node:path";
import LZString from "lz-string";

interface PlaygroundFunction {
  (
    contentByFilename: Record<string, string>,
    title?: string,
  ): string | undefined | Promise<string | undefined>;
}

interface SveltePlaygroundOptions {
  version: number;
  contentByFilename: Record<string, string>;
  title?: string;
}

interface File {
  name: string;
  basename: string;
  contents: string;
  text: boolean;
  type: string;
}

interface PlaygroundData {
  title: string;
  files: File[];
}

// Replacement for codesandbox's getParameters function
function getParameters(parameters: unknown): string {
  return LZString.compressToBase64(JSON.stringify(parameters))
    .replace(/\+/g, "-") // Convert '+' to '-'
    .replace(/\//g, "_") // Convert '/' to '_'
    .replace(/=+$/, ""); // Remove ending '='
}

const playgroundUrlByFramework: Record<string, PlaygroundFunction> = {
  vue3: (contentByFilename: Record<string, string>) => {
    const BASE_URL = "https://sfc.vuejs.org/#";

    function utoa(data: string): string {
      return btoa(unescape(encodeURIComponent(data)));
    }

    function generateURLFromData(data: unknown): string {
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
  svelte4: async (
    contentByFilename: Record<string, string>,
    title?: string,
  ) => {
    return generateSveltePlaygroundURL({
      version: 4,
      contentByFilename,
      title,
    });
  },
  svelte5: async (
    contentByFilename: Record<string, string>,
    title?: string,
  ) => {
    return generateSveltePlaygroundURL({
      version: 5,
      contentByFilename,
      title,
    });
  },
  alpine: (contentByFilename: Record<string, string>) => {
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
            BASE_PREFIX + (contentByFilename["index.html"] || "") + BASE_SUFFIX,
        },
        "sandbox.config.json": {
          content: '{\n  "template": "static"\n}',
        },
      },
    });

    return `${BASE_URL}${parameters}`;
  },
  solid: (contentByFilename: Record<string, string>) => {
    const BASE_URL = "https://playground.solidjs.com/#";
    const SOURCE_PREFIX = `import { render } from "solid-js/web";\n`;
    const getSourceSuffix = (componentName: string) =>
      `\n\nrender(() => <${componentName} />, document.getElementById("app"));\n`;

    function generateURLFromData(data: unknown): string {
      return `${BASE_URL}${LZString.compressToEncodedURIComponent(JSON.stringify(data))}`;
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
  marko: async (contentByFilename: Record<string, string>) => {
    let firstFile = true;
    const data = Object.entries(contentByFilename).map(([path, content]) => ({
      path: firstFile ? ((firstFile = false), "index.marko") : path,
      content,
    }));

    return (
      "https://markojs.com/playground#" +
      (await markoCompress(JSON.stringify(data)))
    );
  },
  ripple: (contentByFilename: Record<string, string>, title?: string) => {
    return generateRipplePlaygroundURL(contentByFilename, title);
  },
};

export default playgroundUrlByFramework;

async function generateSveltePlaygroundURL({
  version,
  contentByFilename,
  title,
}: SveltePlaygroundOptions): Promise<string | undefined> {
  const BASE_URL = `https://svelte.dev/playground/untitled?version=${version}#`;

  const filenames = Object.keys(contentByFilename);
  if (filenames.some((f) => f.includes(".html"))) {
    return;
  }

  const files: File[] = filenames.map((filename, index) => {
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

  const payload: PlaygroundData = { title: title || "", files };

  const hash = await compress_and_encode_text(JSON.stringify(payload));
  if (!hash) {
    return;
  }

  const url = `${BASE_URL}${hash}`;

  return url;
}

// method `compress_and_encode_text` from https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/src/routes/(authed)/playground/%5Bid%5D/gzip.js
async function compress_and_encode_text(input: string): Promise<string> {
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

// method `compress` from https://github.com/marko-js/website/blob/main/src/util/hasher.ts#L8-L25
export async function markoCompress(value: string): Promise<string> {
  const stream = new CompressionStream("gzip");
  const writer = stream.writable.getWriter();
  writer.write(new TextEncoder().encode(value));
  writer.close();

  let result = "v2";
  const reader = stream.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      for (const byte of value) {
        result += String.fromCharCode(byte);
      }
    }

    return btoa(result)
      .replace(/=+$/, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  } finally {
    reader.releaseLock();
  }
}

function generateRipplePlaygroundURL(
  contentByFilename: Record<string, string>,
  title?: string,
): string | undefined {
  function mergeRippleFiles(sourceByFilename: Record<string, string>): string {
    const scriptFilenames = Object.keys(sourceByFilename).filter(
      (filename) =>
        filename.endsWith(".ripple") ||
        filename.endsWith(".js") ||
        filename.endsWith(".ts"),
    );

    if (scriptFilenames.length === 0) {
      return "";
    }

    return scriptFilenames
      .map((filename) =>
        stripLocalRippleImports(sourceByFilename[filename]).trim(),
      )
      .filter(Boolean)
      .join("\n\n");
  }

  function stripLocalRippleImports(source: string): string {
    return source.replace(
      /^\s*import\s+[^"']+from\s+["'](.+?)["'];?\s*$/gm,
      (fullMatch: string, specifier: string) => {
        return specifier.startsWith(".") && isLocalScriptImport(specifier)
          ? ""
          : fullMatch;
      },
    );
  }

  function isLocalScriptImport(specifier: string): boolean {
    return (
      specifier.endsWith(".ripple") ||
      specifier.endsWith(".js") ||
      specifier.endsWith(".ts")
    );
  }

  const filenames = Object.keys(contentByFilename);
  if (filenames.some((filename) => filename.includes(".html"))) {
    return;
  }

  const config = {
    title: title || "",
    description: "",
    head: '<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    htmlAttrs: 'lang="en" class=""',
    tags: [],
    activeEditor: "script",
    markup: {
      language: "html",
      content: `<script type="module">
	import { mount } from 'ripple';
	import * as script from "./script.ripple";

  const exports = Object.keys(script);
  const App = exports.length === 1
		? script[exports[0]]
		: (script.default || script.App || script[exports.find(function (name) {
      return typeof script[name] === 'function';
    })]);

  if (typeof App !== 'function') {
    throw new Error('No valid export found');
  }

  mount(App, {
    target: document.body.appendChild(document.createElement('div')),
  });
</script>`,
    },
    style: {
      language: "css",
      content: "",
      hiddenContent:
        "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background: hsl(0, 0%, 18%); color: #fff }",
    },
    script: {
      language: "ripple",
      content: mergeRippleFiles(contentByFilename),
    },
    stylesheets: [],
    scripts: [],
    cssPreset: "",
    processors: [],
    customSettings: {
      ripple: {
        version: "0.3.3",
      },
    },
    imports: {},
    types: {},
    tests: {
      language: "typescript",
      content: "",
    },
    tools: {
      enabled: "all",
      active: "console",
      status: "closed",
    },
  };

  const url = new URL("https://www.ripple-ts.com/playground");
  url.searchParams.set("v", "0.3.3");
  url.searchParams.set("title", title || "");

  const hashParams = new URLSearchParams();
  hashParams.set(
    "config",
    `code/${LZString.compressToEncodedURIComponent(JSON.stringify(config))}`,
  );

  url.hash = hashParams.toString();
  return url.toString();
}
