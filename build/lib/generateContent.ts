import fs from "node:fs/promises";
import { packageDirectory } from "package-directory";
import path from "node:path";
import FRAMEWORKS from "../../frameworks.ts";
import playgroundUrlByFramework from "./playgroundUrlByFramework.ts";
import prettier from "prettier";
import {
  highlightAngularComponent,
  mustUseAngularHighlighter,
} from "./angularHighlighter.ts";
import {
  codeToHighlightCodeHtml,
  markdownToHighlightedHtml,
} from "./highlighter.ts";
import { kebabCase } from "../../scripts/utils.ts";

interface File {
  fileName: string;
  ext: string;
  content?: string;
  contentHtml: string;
}

interface FrameworkFile {
  fileName: string;
  [key: string]: unknown;
}

interface FrameworkSnippet {
  frameworkId: string;
  snippetId: string;
  files: File[];
  playgroundURL: string;
  markdownFiles: File[];
  snippetEditHref: string;
}

interface Section {
  sectionId: string;
  sectionDirName: string;
  title: string;
}

interface Snippet {
  sectionId: string;
  snippetId: string;
  snippetDirName: string;
  sectionDirName: string;
  title: string;
}

interface TreePayload {
  sections: Section[];
  snippets: Snippet[];
}

async function pathExists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

export default async function generateContent(): Promise<void> {
  const rootDir = await packageDirectory();
  if (!rootDir) {
    throw new Error("Could not find package directory");
  }
  const contentPath = path.join(rootDir, "content");
  const sectionDirNames = await fs.readdir(contentPath);

  const treePayload: TreePayload = {
    sections: [],
    snippets: [],
  };

  const byFrameworkId: Record<string, FrameworkSnippet[]> = {};

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
        frameworkIds.map(async (frameworkId: string) => {
          const frameworkSnippet: FrameworkSnippet = {
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
            const ext = path.parse(codeFilePath).ext.split(".").pop() || "";
            const content = await fs.readFile(codeFilePath, "utf-8");

            const file: File = {
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
            const frameworkConfig = FRAMEWORKS.find(
              (f) => f.id === frameworkId,
            );
            if (frameworkConfig) {
              frameworkSnippet.files = frameworkConfig.filesSorter(
                frameworkSnippet.files as unknown as FrameworkFile[],
              ) as unknown as File[];
            }
            const playgroundURL = await generatePlaygroundURL(
              frameworkId,
              frameworkSnippet.files,
              title,
            );

            if (playgroundURL) {
              frameworkSnippet.playgroundURL = playgroundURL;
            }

            // Remove content key, not used anymore
            frameworkSnippet.files = frameworkSnippet.files.map((file) => ({
              fileName: file.fileName,
              ext: file.ext,
              contentHtml: file.contentHtml,
            }));
          }

          if (!byFrameworkId[frameworkId]) {
            byFrameworkId[frameworkId] = [];
          }

          byFrameworkId[frameworkId].push(frameworkSnippet);
        }),
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
  `,
  );

  if (!(await pathExists(frameworkDirPath))) {
    await fs.mkdir(frameworkDirPath, { recursive: true });
  }

  await Promise.all(
    Object.keys(byFrameworkId).map((frameworkId) => {
      const frameworkFilePath = path.join(
        frameworkDirPath,
        `${frameworkId}.js`,
      );
      return writeJsFile(
        frameworkFilePath,
        `
        ${commentDisclaimer}
        export default ${JSON.stringify(byFrameworkId[frameworkId], null, 2)}
        `,
      );
    }),
  );

  await writeJsFile(
    frameworkIndexPath,
    `
    ${commentDisclaimer}
    export default {
        ${Object.keys(byFrameworkId)
          .map(
            (frameworkId) =>
              `${frameworkId}: () => import("./${frameworkId}.js")`,
          )
          .join(",\n")}
        
    };
    `,
  );
}

function dirNameToTitle(dirName: string): string {
  return capitalize(dirName.split("-").splice(1).join(" "));
}

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function writeJsFile(filepath: string, jsCode: string): Promise<void> {
  const codeFormatted = await prettier.format(jsCode, { parser: "babel" });
  await fs.writeFile(filepath, codeFormatted);
}

async function generatePlaygroundURL(
  frameworkId: string,
  files: File[],
  title: string,
): Promise<string | undefined> {
  const frameworkIdPlayground = playgroundUrlByFramework[frameworkId];
  if (!frameworkIdPlayground) {
    return;
  }

  const frameworkConfig = FRAMEWORKS.find((f) => f.id === frameworkId);
  if (!frameworkConfig) {
    return;
  }

  const contentByFilename = frameworkConfig
    .filesSorter(files as unknown as FrameworkFile[])
    .reduce((acc: Record<string, string>, file) => {
      if ((file as { content?: string }).content) {
        acc[(file as { fileName: string }).fileName] = (
          file as unknown as { content: string }
        ).content;
      }
      return acc;
    }, {});

  const playgroundURL = await frameworkIdPlayground(contentByFilename, title);

  return playgroundURL;
}
