import { remark } from 'remark';
import fs from 'fs/promises';
import frameworks from '../src/frameworks.mjs';
import { packageDirectory } from 'pkg-dir';
import nodePath from 'node:path';
import kebabCase from 'lodash.kebabcase';

function removeMarkdownHeadingContent(content, headingValue, replaceContentValue) {
	const tree = remark.parse(content);

	// find index start
	let targetNodeIndexStart;
	for (let i = 0; i < tree.children.length; i++) {
		const rootNode = tree.children[i];

		if (rootNode.type === 'heading' && rootNode?.children[0]?.value === headingValue) {
			targetNodeIndexStart = i;
			break;
		}
	}

	// find index end
	if (Number.isInteger(targetNodeIndexStart)) {
		let targetNodeIndexEnd = targetNodeIndexStart;
		for (let i = targetNodeIndexStart + 1; i < tree.children.length; i++) {
			const rootNode = tree.children[i];
			if (rootNode.type === 'heading') {
				targetNodeIndexEnd = i;
				break;
			}
		}

		tree.children.splice(targetNodeIndexStart + 1, targetNodeIndexEnd - targetNodeIndexStart - 1, {
			type: 'text',
			value: replaceContentValue || '',
		});
	}

	const newContent = remark.stringify(tree);
	return newContent;
}

async function parseContentDir() {
	const rootDir = await packageDirectory();
	const contentURL = `${rootDir}/content`;
	const rootSectionNames = await fs.readdir(contentURL);

	function dirNameToTitle(dirName) {
		return capitalize(dirName.split('-').splice(1).join(' '));
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
					const ext = nodePath.parse(filePath).ext.split('.').pop();
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

async function main() {
	const codeContentDir = await parseContentDir();
	const content = await fs.readFile('./README.md', 'utf8');
	let newContent = removeMarkdownHeadingContent(content, '🔥 Progression', '{{progression}}');

	let progressionContent = '';
	for (const framework of frameworks) {
		function mdCheck(b) {
			return b ? 'x' : ' ';
		}

		let list = '';
		const allChecks = [];
		for (const rootDir of codeContentDir) {
			let sublist = '';
			const checks = [];
			for (const subdir of rootDir.children) {
				const isChecked = subdir.children.find((n) => n.dirName === framework.id)?.files.length > 0;
				checks.push(isChecked);
				sublist += `   * [${mdCheck(isChecked)}] ${subdir.title}\n`;
			}
			list += `* [${mdCheck(checks.every((v) => v))}] ${rootDir.title}\n`;
			list += sublist;
			allChecks.push(...checks);
		}

		const percent = Math.ceil((allChecks.filter((v) => v).length / allChecks.length) * 100);
		let frameworkContent = `<details>
        <summary>
            <img width="18" height="18" src="public/${framework.img}" />
            <b>${framework.title}</b>
            <img src="https://us-central1-progress-markdown.cloudfunctions.net/progress/${percent}" /></summary>

${list}
</details>`;
		progressionContent += frameworkContent;
	}

	newContent = newContent.replace('{{progression}}', progressionContent);

	await fs.writeFile('README.md', newContent);
}

main().catch(console.error);
