import fs from "fs/promises";
import { packageDirectory } from "pkg-dir";
import nodePath from "node:path";
import kebabCase from "lodash.kebabcase";
import FRAMEWORKS from "../frameworks.mjs";
import prettier from "prettier";

async function main() {
  const codeContentDir = await parseContentDir();
  const readmeContent = await fs.readFile("./README.md", "utf8");

  let progressionContent = "";
  for (const framework of FRAMEWORKS) {
    function mdCheck(b) {
      return b ? "x" : " ";
    }

    let list = "";
    const allChecks = [];
    for (const rootDir of codeContentDir) {
      let sublist = "";
      const checks = [];
      for (const subdir of rootDir.children) {
        const isChecked =
          subdir.children.find((n) => n.dirName === framework.id)?.files
            .length > 0;
        checks.push(isChecked);
        sublist += `   * [${mdCheck(isChecked)}] ${subdir.title}\n`;
      }
      list += `* [${mdCheck(checks.every((v) => v))}] ${rootDir.title}\n`;
      list += sublist;
      allChecks.push(...checks);
    }

    const percent = Math.ceil(
      (allChecks.filter((v) => v).length / allChecks.length) * 100
    );
    let frameworkContent = `<details>
        <summary>
            <img width="18" height="18" src="public/${framework.img}" />
            <b>${framework.title}</b>
            <img src="https://us-central1-progress-markdown.cloudfunctions.net/progress/${percent}" /></summary>

${list}
</details>`;
    progressionContent += frameworkContent;
  }

  const MARKER_START = "<!-- progression start -->";
  const MARKER_END = "<!-- progression end -->";
  const progressionContentRegex = new RegExp(
    `${MARKER_START}([\\s\\S]*?)${MARKER_END}`
  );

  const newProgressionContent =
    "\n" +
    (await prettier.format(progressionContent, {
      parser: "markdown",
    }));

  const newReadmeContent = readmeContent.replace(
    progressionContentRegex,
    `${MARKER_START}${newProgressionContent}${MARKER_END}`
  );

  await fs.writeFile("README.md", newReadmeContent);
}
main().catch(console.error);

async function parseContentDir() {
  const rootDir = await packageDirectory();
  const contentURL = `${rootDir}/content`;
  const rootSectionNames = await fs.readdir(contentURL);

  function dirNameToTitle(dirName) {
    return capitalize(dirName.split("-").splice(1).join(" "));
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const rootSections = [];

  for (const rootSectionName of rootSectionNames) {
    const sectionPath = `${contentURL}/${rootSectionName}`;
    const sections = [];
    const subSectionDirNames = await fs.readdir(sectionPath);

    for (const dirName of subSectionDirNames) {
      const path = `${sectionPath}/${dirName}`;

      const frameworkDirs = await fs.readdir(path);
      const frameworkSections = [];
      for (const frameworkDir of frameworkDirs) {
        const frameworkPath = `${path}/${frameworkDir}`;
        const files = [];
        const fileNames = await fs.readdir(`${frameworkPath}`);

        for (const fileName of fileNames) {
          const filePath = `${frameworkPath}/${fileName}`;
          const ext = nodePath.parse(filePath).ext.split(".").pop();
          files.push({
            path: filePath,
            fileName,
            ext,
            //content: await fs.readFile(filePath, 'utf-8'),
          });
        }

        frameworkSections.push({
          dirName: frameworkDir,
          path: frameworkPath,
          files,
        });
      }

      const title = dirNameToTitle(dirName);
      sections.push({
        id: kebabCase(title),
        path,
        dirName,
        title,
        children: frameworkSections,
      });
    }

    rootSections.push({
      title: dirNameToTitle(rootSectionName),
      children: sections,
    });
  }
  return rootSections;
}
