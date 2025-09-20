import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "node:fs/promises";
import path from "node:path";
import { Eta } from "eta";
import { minify as htmlMinify } from "html-minifier-terser";
import { frameworks } from "./frameworks";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import tailwindcss from "@tailwindcss/vite";
// @TODO: sitemap

const footerNavigation = [
  {
    title: "Most Popular Frameworks",
    links: [
      { name: "React vs Vue", url: "/compare/react-vs-vue" },
      {
        name: "React vs Angular",
        url: "/compare/react-vs-angular-renaissance",
      },
      { name: "Vue vs React", url: "/compare/vue-vs-react" },
      { name: "Vue vs Angular", url: "/compare/vue-vs-angular-renaissance" },
      {
        name: "Angular vs React",
        url: "/compare/angular-renaissance-vs-react",
      },
      { name: "Angular vs Vue", url: "/compare/angular-renaissance-vs-vue" },
    ],
  },
  {
    title: "Popular frameworks vs Rising frameworks",
    links: [
      { name: "React vs Svelte", url: "/compare/react-vs-svelte" },
      { name: "React vs Solid", url: "/compare/react-vs-solid" },
      { name: "Vue vs Svelte", url: "/compare/vue-vs-svelte" },
      { name: "Vue vs Solid", url: "/compare/vue-vs-solid" },
      {
        name: "Angular vs Svelte",
        url: "/compare/angular-renaissance-vs-svelte",
      },
      {
        name: "Angular vs Solid",
        url: "/compare/angular-renaissance-vs-solid",
      },
    ],
  },
  {
    title: "Comparing Legacy version & Current Version",
    links: [
      { name: "Svelte 4 vs Svelte 5", url: "/compare/svelte4-vs-svelte5" },
      { name: "Vue 2 vs Vue 3", url: "/compare/vue2-vs-vue3" },
      {
        name: "Angular vs Angular Renaissance",
        url: "/compare/angular-vs-angularRenaissance",
      },
      {
        name: "Aurelia 1 vs Aurelia 2",
        url: "/compare/aurelia1-vs-aurelia2",
      },
    ],
  },
  {
    title: "Comparing Current Version & Upcoming Version",
    links: [
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
  description: `Web component JS frameworks overview by their syntax and features: ${frameworks.map((f) => f.title).join(", ")}`,
  image: "https://component-party.dev/banner2.png",
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@frameworks": path.resolve(import.meta.dirname, "frameworks"),
    },
  },
  plugins: [
    pluginGenerateFrameworkContent(),
    svelte(),
    svelteInspector(), // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
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
    tailwindcss(),
  ],
  optimizeDeps: {
    entries: ["src/**/*"],
  },
  build: {
    rollupOptions: {
      external: (id) => {
        return id.includes("/content/");
      },
    },
  },
});

async function generateHtmlPagesPlugin(pages: unknown[]) {
  const eta = new Eta({ views: "." });

  const template = {
    footer: await fs.readFile(
      path.resolve(import.meta.dirname, "build/template/footer.html"),
      "utf8",
    ),
  };

  const htmlTransform = {
    include(html: string) {
      for (const [templateName, templateContent] of Object.entries(template)) {
        html = html.replace(
          `<!--template:${templateName}-->`,
          eta.renderString(templateContent, { navigations: footerNavigation }),
        );
      }
      return html;
    },
    render(htmlEta: string, data: unknown) {
      return eta.renderString(htmlEta, data as object);
    },
  };

  return {
    name: "generate-html-pages",
    transformIndexHtml(html: string, ctx: unknown) {
      html = htmlTransform.include(html);
      if ((ctx as { server?: unknown }).server) {
        const matchedPage = pages.find(
          (page: unknown) =>
            (ctx as { originalUrl?: string }).originalUrl ===
            filePathToUrl((page as { outputPath: string }).outputPath),
        );
        if (matchedPage) {
          html = htmlTransform.render(
            html,
            (matchedPage as { templateData: unknown }).templateData,
          );
        } else {
          html = htmlTransform.render(html, templateDataDefaults);
        }
      }
      return html;
    },
    async closeBundle() {
      for (const page of pages) {
        const template =
          (page as { template?: string }).template || "index.html";
        const templateData =
          (page as { templateData?: unknown }).templateData || {};
        const templatePath = path.join(import.meta.dirname, template);
        const outputPath = path.join(
          import.meta.dirname,
          "dist",
          (page as { outputPath: string }).outputPath,
        );

        const templateContent = await fs.readFile(templatePath, "utf8");
        const compiledHtml = eta.renderString(templateContent, templateData);
        const minifiedHtml = await htmlMinify(compiledHtml);
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true });
        await fs.writeFile(outputPath, minifiedHtml, "utf8");
      }
    },
  };
}

function filePathToUrl(filePath: string) {
  const normalizedPath = path.normalize(filePath);
  const baseName = path.basename(normalizedPath);

  if (baseName === "index.html") {
    return path.dirname(normalizedPath) === "."
      ? "/"
      : path.dirname(normalizedPath) + "/";
  } else {
    return normalizedPath.replace(/.html$/, "");
  }
}
