import fs from "node:fs/promises";
import { packageDirectory } from "pkg-dir";
import path from "node:path";
import kebabCase from "lodash.kebabcase";
import FRAMEWORKS from "../../frameworks.mjs";
import frameworkPlayground from "./playground/index.js";
import prettier from "prettier";
import {
  highlightAngularComponent,
  mustUseAngularHighlighter,
} from "./angularHighlighter.js";
import {
  codeToHighlightCodeHtml,
  markdownToHighlightedHtml,
} from "./highlighter.js";

async function pathExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
}

export default async function generateContent() {
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
      const frameworkIds = FRAMEWORKS.map(({ id }) => id);

      await Promise.all(
        frameworkIds.map(async (frameworkId) => {
          const frameworkSnippet = {
            frameworkId,
            snippetId,
            files: [],
            playgroundURL: "",
            markdownFiles: [],
            snippetEditHref: `https://github.com/matschik/component-party/tree/main/content/${sectionDirName}/${snippetDirName}/${frameworkId}`,
          };

          const codeFilesDirPath = path.join(frameworksDirPath, frameworkId);
          if (!(await pathExists(codeFilesDirPath))) {
            byFrameworkId[frameworkId].push(frameworkSnippet);
            return;
          }
          const codeFileNames = await fs.readdir(codeFilesDirPath);

          for (const codeFileName of codeFileNames) {
            const codeFilePath = path.join(codeFilesDirPath, codeFileName);
            const ext = path.parse(codeFilePath).ext.split(".").pop();
            const content = await fs.readFile(codeFilePath, "utf-8");

            const file = {
              fileName: codeFileName,
              ext,
              content,
              contentHtml: "",
            };

            if (ext === "md") {
              file.contentHtml = await markdownToHighlightedHtml(content);
              frameworkSnippet.markdownFiles.push(file);
            } else {
              file.contentHtml = mustUseAngularHighlighter(content)
                ? await highlightAngularComponent(content, ext)
                : await codeToHighlightCodeHtml(content, ext);

              frameworkSnippet.files.push(file);
            }
          }

          if (frameworkSnippet.files.length > 0) {
            const { filesSorter } = FRAMEWORKS.find(
              (f) => f.id === frameworkId
            );
            frameworkSnippet.files = filesSorter(frameworkSnippet.files);
            const playgroundURL = generatePlaygroundURL(
              frameworkId,
              frameworkSnippet.files
            );

            if (playgroundURL) {
              frameworkSnippet.playgroundURL = playgroundURL;
            }

            // Remove content key, not used anymore
            frameworkSnippet.files = frameworkSnippet.files.map((file) => ({
              ...file,
              content: undefined,
            }));
          }

          if (!byFrameworkId[frameworkId]) {
            byFrameworkId[frameworkId] = [];
          }

          byFrameworkId[frameworkId].push(frameworkSnippet);
        })
      );
    }
  }

  const generatedContentDirPath = path.join(rootDir, "src/generatedContent");
  const frameworkDirPath = path.join(generatedContentDirPath, "framework");
  const treeFilePath = path.join(generatedContentDirPath, "tree.js");
  const frameworkIndexPath = path.join(frameworkDirPath, "index.js");
  const commentDisclaimer = `// File generated from "node scripts/generateContent.js", DO NOT EDIT/COMMIT`;

  if (!(await pathExists(generatedContentDirPath))) {
    await fs.mkdir(generatedContentDirPath, { recursive: true });
  }

  await writeJsFile(
    treeFilePath,
    `
    ${commentDisclaimer}
    export const sections = ${JSON.stringify(treePayload.sections, null, 2)};
    export const snippets = ${JSON.stringify(treePayload.snippets, null, 2)};
  `
  );

  if (!(await pathExists(frameworkDirPath))) {
    await fs.mkdir(frameworkDirPath, { recursive: true });
  }

  await Promise.all(
    Object.keys(byFrameworkId).map((frameworkId) => {
      const frameworkFilePath = path.join(
        frameworkDirPath,
        `${frameworkId}.js`
      );
      return writeJsFile(
        frameworkFilePath,
        `
        ${commentDisclaimer}
        export default ${JSON.stringify(byFrameworkId[frameworkId], null, 2)}
        `
      );
    })
  );

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
}

function dirNameToTitle(dirName) {
  return capitalize(dirName.split("-").splice(1).join(" "));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function writeJsFile(filepath, jsCode) {
  const codeFormatted = await prettier.format(jsCode, { parser: "babel" });
  await fs.writeFile(filepath, codeFormatted);
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
