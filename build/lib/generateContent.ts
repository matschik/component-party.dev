import fs from "node:fs/promises";
import { packageDirectory } from "package-directory";
import path from "node:path";
import { frameworks } from "../../frameworks.ts";
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
import kebabCase from "just-kebab-case";

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

async function shouldRegenerateFiles(
  contentPath: string,
  generatedContentDirPath: string,
  frameworkDirPath: string,
): Promise<boolean> {
  // Check if any generated files exist
  const treeFilePath = path.join(generatedContentDirPath, "tree.js");
  const treeDtsFilePath = path.join(generatedContentDirPath, "tree.d.ts");
  const frameworkIndexPath = path.join(frameworkDirPath, "index.js");
  const frameworkIndexDtsPath = path.join(frameworkDirPath, "index.d.ts");

  const generatedFilesExist = await Promise.all([
    pathExists(treeFilePath),
    pathExists(treeDtsFilePath),
    pathExists(frameworkIndexPath),
    pathExists(frameworkIndexDtsPath),
  ]);

  // If any generated file is missing, regenerate
  if (!generatedFilesExist.every(Boolean)) {
    return true;
  }

  // Get the modification time of the content directory
  const contentStats = await fs.stat(contentPath);
  const contentModTime = contentStats.mtime;

  // Check if any generated file is older than the content directory
  const generatedFilePaths = [
    treeFilePath,
    treeDtsFilePath,
    frameworkIndexPath,
    frameworkIndexDtsPath,
  ];

  for (const filePath of generatedFilePaths) {
    try {
      const fileStats = await fs.stat(filePath);
      if (fileStats.mtime < contentModTime) {
        return true;
      }
    } catch {
      // If we can't stat a file, regenerate to be safe
      return true;
    }
  }

  return false;
}

export default async function generateContent(
  options: { noCache?: boolean } = {},
): Promise<void> {
  const rootDir = await packageDirectory();
  if (!rootDir) {
    throw new Error("Could not find package directory");
  }
  const contentPath = path.join(rootDir, "content");
  const generatedContentDirPath = path.join(rootDir, "src/generatedContent");
  const frameworkDirPath = path.join(generatedContentDirPath, "framework");

  // Check if we should skip generation due to cache
  if (!options.noCache) {
    const shouldRegenerate = await shouldRegenerateFiles(
      contentPath,
      generatedContentDirPath,
      frameworkDirPath,
    );

    if (!shouldRegenerate) {
      console.info("Generated content is up to date, skipping generation.");
      return;
    }
  }

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
      const frameworkIds = frameworks.map(({ id }) => id);

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
            const frameworkConfig = frameworks.find(
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

  const treeFilePath = path.join(generatedContentDirPath, "tree.js");
  const treeDtsFilePath = path.join(generatedContentDirPath, "tree.d.ts");
  const frameworkIndexPath = path.join(frameworkDirPath, "index.js");
  const frameworkIndexDtsPath = path.join(frameworkDirPath, "index.d.ts");
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

  await writeDtsFile(
    treeDtsFilePath,
    `
    ${commentDisclaimer}
    export interface Section {
      sectionId: string;
      sectionDirName: string;
      title: string;
    }

    export interface Snippet {
      sectionId: string;
      snippetId: string;
      snippetDirName: string;
      sectionDirName: string;
      title: string;
    }

    export declare const sections: Section[];
    export declare const snippets: Snippet[];
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

  await writeDtsFile(
    frameworkIndexDtsPath,
    `
    ${commentDisclaimer}
    declare const snippetsImporterByFrameworkId: {
      [key: string]: () => Promise<any>;
    };

    export default snippetsImporterByFrameworkId;
  `,
  );

  // Generate _redirects file for Cloudflare Pages
  await generateRedirectsFile(rootDir);
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

async function writeDtsFile(filepath: string, dtsCode: string): Promise<void> {
  const codeFormatted = await prettier.format(dtsCode, {
    parser: "typescript",
  });
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

  const frameworkConfig = frameworks.find((f) => f.id === frameworkId);
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

async function generateRedirectsFile(rootDir: string): Promise<void> {
  // Generate all possible framework combinations
  const frameworkIds = frameworks.map((f) => f.id);
  const redirects: string[] = [];

  // Generate redirects for all framework pairs (both directions)
  for (let i = 0; i < frameworkIds.length; i++) {
    for (let j = 0; j < frameworkIds.length; j++) {
      if (i !== j) {
        const framework1 = frameworkIds[i];
        const framework2 = frameworkIds[j];
        const redirectPath = `/compare/${framework1}-vs-${framework2}`;
        const targetUrl = `/?f=${framework1}-${framework2}`;
        redirects.push(`${redirectPath} ${targetUrl} 301`);
      }
    }
  }

  // Generate dynamic redirects for comma-separated patterns using placeholders
  const dynamicRedirects = [
    // Single framework redirects (static for better performance)
    ...frameworkIds.map((id) => `/?f=${id} / 301`),
    // Dynamic redirects for comma-separated patterns - matches any comma-separated values
    // This will catch patterns like /?f=react,vue3,angular or /?f=mithril,alpine,etc
    "/?f=:frameworks / 301",
  ];

  redirects.push(...dynamicRedirects);

  // Add specific compare patterns that don't match our framework pairs
  const specificCompareRedirects = ["/compare/emberPolaris-vs-angular / 301"];
  redirects.push(...specificCompareRedirects);

  const redirectsContent = `# File generated from "node scripts/generateContent.js", DO NOT EDIT/COMMIT
${redirects.join("\n")}
`;

  const publicDir = path.join(rootDir, "public");
  const redirectsFilePath = path.join(publicDir, "_redirects");

  await fs.writeFile(redirectsFilePath, redirectsContent);
  console.info(
    `Generated _redirects file for Cloudflare Pages with ${redirects.length} redirects`,
  );
}
