import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import fs from "node:fs/promises";
import path from "node:path";
import { Eta } from "eta";
import { minify as htmlMinify } from "html-minifier-terser";
import FRAMEWORKS from "./frameworks.mjs";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin.js";

// @TODO: sitemap

const footerNavigation = [
  {
    title: "Most Popular Frameworks",
    links: [
      { name: "React vs Vue", url: "/compare/react-vs-vue" },
      { name: "React vs Angular", url: "/compare/react-vs-angular" },
      { name: "Vue vs React", url: "/compare/vue-vs-react" },
      { name: "Vue vs Angular", url: "/compare/vue-vs-angular" },
      { name: "Angular vs React", url: "/compare/angular-vs-react" },
      { name: "Angular vs Vue", url: "/compare/angular-vs-vue" },
    ],
  },
  {
    title: "Popular frameworks vs Rising frameworks",
    links: [
      { name: "React vs Svelte", url: "/compare/react-vs-svelte" },
      { name: "React vs Solid", url: "/compare/react-vs-solid" },
      { name: "Vue vs Svelte", url: "/compare/vue-vs-svelte" },
      { name: "Vue vs Solid", url: "/compare/vue-vs-solid" },
      { name: "Angular vs Svelte", url: "/compare/angular-vs-svelte" },
      { name: "Angular vs Solid", url: "/compare/angular-vs-solid" },
    ],
  },
  {
    title: "Comparing Legacy version & Current Version",
    links: [
      { name: "Vue 2 vs Vue 3", url: "/compare/vue2-vs-vue3" },
      {
        name: "Aurelia 1 vs Aurelia 2",
        url: "/compare/aurelia1-vs-aurelia2",
      },
    ],
  },
  {
    title: "Comparing Current Version & Upcoming Version",
    links: [
      { name: "Svelte 4 vs Svelte 5", url: "/compare/svelte4-vs-svelte5" },
      {
        name: "Ember Octane vs Ember Polaris",
        url: "/compare/emberOctane-vs-emberPolaris",
      },
    ],
  },
];

const footerLinks = footerNavigation.map((n) => n.links).flat();

const templateDataDefaults = {
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
        outputPath: `${link.url}.html`,
        template: "dist/index.html",
        templateData: {
          ...templateDataDefaults,
          title: `${link.name} - ${templateDataDefaults.title}`,
        },
      })),
      {
        outputPath: "index.html",
        template: "dist/index.html",
        templateData: templateDataDefaults,
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

  const template = {
    footer: await fs.readFile(
      path.resolve(__dirname, "build/template/footer.eta"),
      "utf8"
    ),
  };

  const htmlTransform = {
    include(html) {
      for (const [templateName, templateContent] of Object.entries(template)) {
        html = html.replace(
          `<!--template:${templateName}-->`,
          eta.renderString(templateContent, { navigations: footerNavigation })
        );
      }
      return html;
    },
    render(htmlEta, data) {
      return eta.renderString(htmlEta, data);
    },
  };

  return {
    name: "generate-html-pages",
    transformIndexHtml(html, ctx) {
      html = htmlTransform.include(html);
      if (ctx.server) {
        const matchedPage = pages.find(
          (page) => ctx.originalUrl === filePathToUrl(page.outputPath)
        );
        if (matchedPage) {
          html = htmlTransform.render(html, matchedPage.templateData);
        } else {
          html = htmlTransform.render(html, templateDataDefaults);
        }
      }
      return html;
    },
    async closeBundle() {
      for (const page of pages) {
        const template = page.template || "index.html";
        const templateData = page.templateData || {};
        const templatePath = path.join(__dirname, template);
        const outputPath = path.join(__dirname, "dist", page.outputPath);

        const templateContent = await fs.readFile(templatePath, "utf8");
        const compiledHtml = eta.renderString(templateContent, templateData);
        const minifiedHtml = await htmlMinify(compiledHtml);
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true, force: true });
        await fs.writeFile(outputPath, minifiedHtml, "utf8");
      }
    },
  };
}

function filePathToUrl(filePath) {
  let normalizedPath = path.normalize(filePath);
  let baseName = path.basename(normalizedPath);

  if (baseName === "index.html") {
    return path.dirname(normalizedPath) === "."
      ? "/"
      : path.dirname(normalizedPath) + "/";
  } else {
    return normalizedPath.replace(/.html$/, "");
  }
}
