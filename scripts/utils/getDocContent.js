import fs from 'fs';
import path from 'path';
import { FRAMEWORKS } from '../../config.cjs';

const CONTENT_DIR = "content"

export default function getDocContent() {
	let content = '';

	const contentDirs = fs.readdirSync(CONTENT_DIR);

	for (const contentDir of contentDirs) {
		const sectionDir = `${CONTENT_DIR}/${contentDir}`;
		const subSectionDirs = fs.readdirSync(sectionDir).filter((path) => !path.includes('.'));

		let fileContent = `# ${dirNameToTitle(contentDir)}\n`;

		for (const subSectionDir of subSectionDirs) {
			// write subsection title
			fileContent += `## ${dirNameToTitle(subSectionDir)}\n`;

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
	}

	return content
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
