import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import fs from "node:fs/promises";
import path from "node:path";
import { Eta } from "eta";
import FRAMEWORKS from "./frameworks.mjs";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin.js";

const footerNavigation = [
  {
    title: "Most Popular Frameworks",
    links: [
      { name: "React vs. Vue", url: "/compare/react-vs-vue" },
      { name: "React vs. Angular", url: "/compare/react-vs-angular" },
      { name: "Vue vs. React", url: "/compare/vue-vs-react" },
      { name: "Vue vs. Angular", url: "/compare/vue-vs-angular" },
      { name: "Angular vs. React", url: "/compare/angular-vs-react" },
      { name: "Angular vs. Vue", url: "/compare/angular-vs-vue" },
    ],
  },
  {
    title: "Popular frameworks vs. Rising frameworks",
    links: [
      { name: "React vs. Svelte", url: "/compare/react-vs-svelte" },
      { name: "React vs. Solid", url: "/compare/react-vs-solid" },
      { name: "Vue vs. Svelte", url: "/compare/vue-vs-svelte" },
      { name: "Vue vs. Solid", url: "/compare/vue-vs-solid" },
      { name: "Angular vs. Svelte", url: "/compare/angular-vs-svelte" },
      { name: "Angular vs. Solid", url: "/compare/angular-vs-solid" },
    ],
  },
  {
    title: "Comparing Legacy version & Current Version",
    links: [
      { name: "Vue 2 vs. Vue 3", url: "/compare/vue-2-vs-vue-3" },
      {
        name: "Aurelia 1 vs. Aurelia 2",
        url: "/compare/aurelia-1-vs-aurelia-2",
      },
    ],
  },
  {
    title: "Comparing Current Version & Upcoming Version",
    links: [
      { name: "Svelte 4 vs. Svelte 5", url: "/compare/svelte-4-vs-svelte-5" },
    ],
  },
];

const footerLinks = footerNavigation.map((n) => n.links).flat();

const sharedTemplateData = {
  title: "Component Party",
  url: "https://component-party.dev/",
  description: `Web component JS frameworks overview by their syntax and features: ${FRAMEWORKS.map((f) => f.title).join(", ")}`,
  image: "https://component-party.dev/banner2.png",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginGenerateFrameworkContent(),
    svelte(),
    generateHtmlPagesPlugin([
      ...footerLinks.map((link) => ({
        entry: "/src/main.js",
        outputPath: `${link.url}.html`,
        template: "dist/index.html",
        templateData: {
          ...sharedTemplateData,
          title: `${link.name} - ${sharedTemplateData.title}`,
        },
      })),
      {
        entry: "/src/main.js",
        outputPath: "index.html",
        template: "dist/index.html",
        templateData: sharedTemplateData,
      },
    ]),
  ],
  ignore: ["content"],
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
});

async function generateHtmlPagesPlugin(pages) {
  const eta = new Eta({ views: "." });

  const indexPageData = sharedTemplateData;

  const include = {
    footer: await fs.readFile(
      path.resolve(__dirname, "build/include/footer.eta"),
      "utf8"
    ),
  };

  function transformIndexHtml(html) {
    for (const [key, etaContent] of Object.entries(include)) {
      html = html.replace(
        `<!--include:${key}-->`,
        eta.renderString(etaContent, { navigations: footerNavigation })
      );
    }
    html = eta.renderString(html, indexPageData);
    return html;
  }

  return {
    name: "generate-html-pages",
    transformIndexHtml,
    async load(id) {
      if (id.endsWith("index.html")) {
        const indexPath = path.resolve(__dirname, "index.html");
        let html = await fs.readFile(indexPath, "utf8");
        html = transformIndexHtml(html);
        return html;
      }
      return null;
    },
    async closeBundle() {
      for (const page of pages) {
        const template = page.template || "index.html";
        const templateData = page.templateData || {};
        const templatePath = path.join(__dirname, template);
        const outputPath = path.join(__dirname, "dist", page.outputPath);

        const templateContent = await fs.readFile(templatePath, "utf8");
        const compiledHtml = eta.renderString(templateContent, templateData);
        // @TODO: add minify
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true, force: true });
        await fs.writeFile(outputPath, compiledHtml, "utf8");
      }
    },
  };
}
