import fs from "node:fs/promises";
import { packageDirectory } from "pkg-dir";
import path from "node:path";
import kebabCase from "lodash.kebabcase";
import { getHighlighter } from "shiki";
import FRAMEWORKS from "../frameworks.mjs";
import frameworkPlayground from "./lib/playground/index.js";
import componentPartyShikiTheme from "./lib/componentPartyShikiTheme.js";
import prettier from "prettier";
import markdownToHtml from "./lib/markdownToHtml.js";

const highlighter = await getHighlighter({
  theme: componentPartyShikiTheme,
  langs: ["javascript", "svelte", "html", "hbs", "tsx", "jsx", "vue"],
});

const rootDir = await packageDirectory();
const contentPath = path.join(rootDir, "content");
const sectionDirNames = await fs.readdir(contentPath);

const treePayload = {
  sections: [],
  snippets: [],
};

const byFrameworkId = {};

for (const sectionDirName of sectionDirNames) {
  const sectionTitle = dirNameToTitle(sectionDirName);
  const sectionId = kebabCase(sectionTitle);

  treePayload.sections.push({
    sectionId,
    sectionDirName,
    title: sectionTitle,
  });

  const snippetsDirPath = path.join(contentPath, sectionDirName);
  const snippetDirNames = await fs.readdir(snippetsDirPath);

  for (const snippetDirName of snippetDirNames) {
    const title = dirNameToTitle(snippetDirName);
    const snippetId = kebabCase(title);

    treePayload.snippets.push({
      sectionId,
      snippetId,
      snippetDirName,
      sectionDirName,
      title,
    });

    const frameworksDirPath = path.join(snippetsDirPath, snippetDirName);
    const frameworkIds = await fs.readdir(frameworksDirPath);
    for (const frameworkId of frameworkIds) {
      const frameworkSnippet = {
        frameworkId,
        snippetId,
        files: [],
        playgroundURL: "",
        markdownContent: "",
      };

      const codeFilesDirPath = path.join(frameworksDirPath, frameworkId);
      const codeFileNames = await fs.readdir(codeFilesDirPath);

      for (const codeFileName of codeFileNames) {
        const codeFilePath = path.join(codeFilesDirPath, codeFileName);
        const ext = path.parse(codeFilePath).ext.split(".").pop();
        const content = await fs.readFile(codeFilePath, "utf-8");

        if (ext === "md") {
          frameworkSnippet.markdownContent = await markdownToHtml(content);
          // Only support 1 markdown file and every other files are ignored
          break;
        }

        frameworkSnippet.files.push({
          fileName: codeFileName,
          ext,
          content,
          contentHtml: highlighter.codeToHtml(content, { lang: ext }),
        });
      }

      if (frameworkSnippet.files.length > 0) {
        const playgroundURL = generatePlaygroundURL(
          frameworkId,
          frameworkSnippet.files
        );

        if (playgroundURL) {
          frameworkSnippet.playgroundURL = playgroundURL;
        }
      }

      if (!byFrameworkId[frameworkId]) {
        byFrameworkId[frameworkId] = [];
      }

      byFrameworkId[frameworkId].push(frameworkSnippet);
    }
  }
}

const generatedContentDirPath = path.join(rootDir, "src/generatedContent");
const frameworkDirPath = path.join(generatedContentDirPath, "framework");
const treeFilePath = path.join(generatedContentDirPath, "tree.js");
const frameworkIndexPath = path.join(frameworkDirPath, "index.js");
await fs.rm(generatedContentDirPath, { recursive: true, force: true });
await fs.mkdir(generatedContentDirPath, { recursive: true });
const commentDisclaimer = `// File generated from "node scripts/generateContent.js", DO NOT EDIT`;

await writeJsFile(
  treeFilePath,
  `
    ${commentDisclaimer}
    export const sections = ${JSON.stringify(treePayload.sections, null, 2)};
    export const snippets = ${JSON.stringify(treePayload.snippets, null, 2)};
  `
);

await fs.mkdir(frameworkDirPath, { recursive: true });
for (const frameworkId of Object.keys(byFrameworkId)) {
  const frameworkFilePath = path.join(frameworkDirPath, `${frameworkId}.js`);
  await writeJsFile(
    frameworkFilePath,
    `
    ${commentDisclaimer}
    export default ${JSON.stringify(byFrameworkId[frameworkId], null, 2)}
    `
  );
}

await writeJsFile(
  frameworkIndexPath,
  `
    ${commentDisclaimer}
    export default {
        ${Object.keys(byFrameworkId)
          .map(
            (frameworkId) =>
              `${frameworkId}: () => import("./${frameworkId}.js")`
          )
          .join(",\n")}
        
    };
    `
);

function dirNameToTitle(dirName) {
  return capitalize(dirName.split("-").splice(1).join(" "));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function writeJsFile(filepath, jsCode) {
  await fs.writeFile(filepath, prettier.format(jsCode, { parser: "babel" }));
}

function generatePlaygroundURL(frameworkId, files) {
  const frameworkIdPlayground = frameworkPlayground[frameworkId];
  if (!frameworkIdPlayground) {
    return;
  }

  const frameworkConfig = FRAMEWORKS.find((f) => f.id === frameworkId);

  const contentByFilename = frameworkConfig
    .filesSorter(files)
    .reduce((acc, file) => {
      acc[file.fileName] = file.content;
      return acc;
    }, {});

  const playgroundURL =
    frameworkIdPlayground.fromContentByFilename(contentByFilename);

  return playgroundURL;
}
