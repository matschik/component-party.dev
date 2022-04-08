import fs from 'fs';
import path from 'path';
import { FRAMEWORKS } from '../../config.cjs';

const CONTENT_DIR = 'content';

export default function getDocContent() {
	let content = '';

	const tree = [];

	const contentDirs = fs.readdirSync(CONTENT_DIR);

	for (const contentDir of contentDirs) {
		const sectionDir = `${CONTENT_DIR}/${contentDir}`;
		const subSectionDirs = fs.readdirSync(sectionDir).filter((path) => !path.includes('.'));
		const contentDirTitle = dirNameToTitle(contentDir);
		const treeNode = {
			id: contentDir.split('-').splice(1).join('-'),
			title: contentDirTitle,
			sections: [],
		};

		let fileContent = `# ${contentDirTitle}\n`;

		for (const subSectionDir of subSectionDirs) {
			const subSectionDirTitle = dirNameToTitle(subSectionDir);
			treeNode.sections.push({
				id: subSectionDir.split('-').splice(1).join('-'),
				title: subSectionDirTitle,
			});
			// write subsection title
			fileContent += `## ${subSectionDirTitle}\n`;

			const frameworkDirs = fs.readdirSync(`${sectionDir}/${subSectionDir}`).filter((path) => !path.includes('.'));

			for (const frameworkDir of frameworkDirs) {
				const framework = FRAMEWORKS.find((f) => f.id === frameworkDir);
				fileContent += `### ${framework.title}\n`;
				const files = fs.readdirSync(`${sectionDir}/${subSectionDir}/${frameworkDir}`);

				function addSnippetWrap(content) {
					return `\`\`\`${framework.ext}\n${content}\n\`\`\`\n\n`;
				}

				for (const file of files) {
					const parsedFile = path.parse(file);
					const currentFileContent = fs.readFileSync(`${sectionDir}/${subSectionDir}/${frameworkDir}/${file}`);
					const frameworkFileContent = parsedFile.ext === '.md' ? `${currentFileContent}\n` : addSnippetWrap(currentFileContent);
					fileContent += frameworkFileContent;
				}
			}
		}

		content += addHashOnEachLine(fileContent);
		tree.push(treeNode);
	}

	fs.writeFileSync("src/tree.js", `export default ${JSON.stringify(tree, null, 2)}`, "utf8")

	return content;
}

function dirNameToTitle(dirName) {
	return capitalize(dirName.split('-').splice(1).join(' '));
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function addHashOnEachLine(content) {
	return (
		content
			.split('\n')
			.map((line) => (line.startsWith('#') ? `#${line}` : `${line}`))
			.join('\n') + '\n'
	);
}
