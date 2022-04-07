import fs from 'fs';
import path from 'path';
import { FRAMEWORKS } from '../config.cjs';

async function main() {
	const contentDirs = fs.readdirSync('content');
	let readmeContent = fs.readFileSync('README.base.md') + '\n\n';

	for (const contentDir of contentDirs) {
		const sectionDir = `content/${contentDir}`;
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

		readmeContent += addHashOnEachLine(fileContent);
	}

	// create /README.md
	fs.writeFileSync('README.md', readmeContent, 'utf-8');
}

main().catch(console.error);

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
