import fs from "fs/promises";
import { packageDirectory } from "pkg-dir";
import path from "node:path";
import kebabCase from "lodash.kebabcase";
import FRAMEWORKS from "../frameworks.mjs";
import prettier from "prettier";

async function main() {
  const contentTree = await parseContentDir();
  const readmeContent = await fs.readFile("README.md", "utf8");

  const progressionContent = await generateProgressionMarkdown(contentTree);

  const MARKER_START = "<!-- progression start -->";
  const MARKER_END = "<!-- progression end -->";
  const progressionContentRegex = new RegExp(
    `${MARKER_START}([\\s\\S]*?)${MARKER_END}`
  );

  const newReadmeContent = readmeContent.replace(
    progressionContentRegex,
    `${MARKER_START}\n${progressionContent}\n${MARKER_END}`
  );

  await fs.writeFile("README.md", newReadmeContent);
}

main().catch(console.error);

async function parseContentDir() {
  const rootDir = await packageDirectory();
  const contentPath = path.join(rootDir, "content");
  const rootDirs = await fs.readdir(contentPath);

  function dirNameToTitle(dirName) {
    return capitalize(dirName.split("-").slice(1).join(" "));
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const sections = [];

  for (const rootDirName of rootDirs) {
    const rootSectionPath = path.join(contentPath, rootDirName);
    const subDirs = await fs.readdir(rootSectionPath).catch(() => []);
    const children = [];

    for (const subDir of subDirs) {
      const subDirPath = path.join(rootSectionPath, subDir);
      const frameworks = await fs.readdir(subDirPath).catch(() => []);
      const frameworkChildren = [];

      for (const fw of frameworks) {
        const fwPath = path.join(subDirPath, fw);
        const fileNames = await fs.readdir(fwPath).catch(() => []);
        const files = fileNames.map((fileName) => ({
          path: path.join(fwPath, fileName),
          fileName,
          ext: path.extname(fileName).slice(1),
        }));
        frameworkChildren.push({ dirName: fw, path: fwPath, files });
      }

      children.push({
        id: kebabCase(dirNameToTitle(subDir)),
        path: subDirPath,
        dirName: subDir,
        title: dirNameToTitle(subDir),
        children: frameworkChildren,
      });
    }

    sections.push({
      title: dirNameToTitle(rootDirName),
      children,
    });
  }

  return sections;
}

function mdCheck(b) {
  return b ? "x" : " ";
}

async function generateProgressionMarkdown(contentTree) {
  let output = "";

  for (const framework of FRAMEWORKS) {
    const frameworkLines = [];
    const allChecks = [];

    for (const root of contentTree) {
      const sectionChecks = [];
      const subLines = [];

      for (const sub of root.children) {
        const fwEntry = sub.children.find((c) => c.dirName === framework.id);
        const hasFiles = fwEntry?.files?.length > 0;
        sectionChecks.push(!!hasFiles);
        subLines.push(`   * [${mdCheck(hasFiles)}] ${sub.title}`);
      }

      frameworkLines.push(
        `* [${mdCheck(sectionChecks.every(Boolean))}] ${root.title}`
      );
      frameworkLines.push(...subLines);
      allChecks.push(...sectionChecks);
    }

    const percent = Math.ceil(
      (allChecks.filter(Boolean).length / allChecks.length) * 100
    );

    const markdown = `
<details>
  <summary>
    <img width="18" height="18" src="public/${framework.img}" />
    <b>${framework.title}</b>
    <img src="https://us-central1-progress-markdown.cloudfunctions.net/progress/${percent}" />
  </summary>

${frameworkLines.join("\n")}

</details>
    `;

    output += markdown;
  }

  return prettier.format(output, { parser: "markdown" });
}
