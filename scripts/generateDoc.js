import fs from 'fs';
import { FRAMEWORKS } from './_constants.js';

async function main() {
	const srcDirs = fs.readdirSync('src');

	let rootReadmeContent = '# Component Party\n\n';

	for (const srcDir of srcDirs) {
		const sectionDir = `src/${srcDir}`;
		const subSectionDirs = fs.readdirSync(sectionDir).filter((path) => !path.includes('.'));
		let fileContent = '';

		fileContent += `# ${dirNameToTitle(srcDir)}\n`;

		for (const subSectionDir of subSectionDirs) {
			fileContent += `## ${dirNameToTitle(subSectionDir)}\n`;
			const frameworkDirs = fs
				.readdirSync(`${sectionDir}/${subSectionDir}`)
				.filter((path) => !path.includes('.'));
			console.log(frameworkDirs);
			for (const frameworkDir of frameworkDirs) {
				fileContent += `### ${FRAMEWORKS.find((f) => f.id === frameworkDir).title}\n`;
				const files = fs.readdirSync(`${sectionDir}/${subSectionDir}/${frameworkDir}`);

				for (const file of files) {
					fileContent += `\`\`\`${
						FRAMEWORKS.find((f) => f.id === frameworkDir).ext
					}\n${fs.readFileSync(
						`${sectionDir}/${subSectionDir}/${frameworkDir}/${file}`
					)}\n\`\`\`\n\n`;
				}
			}
		}

		fs.writeFileSync(`${sectionDir}/README.md`, fileContent, 'utf-8');

		rootReadmeContent += `${fileContent
			.split('\n')
			.map((line) => (line.startsWith('#') ? `#${line}` : `${line}`))
			.join('\n')}\n`;
	}

	fs.writeFileSync(`README.md`, rootReadmeContent, 'utf-8');
}

main().catch(console.error);

function dirNameToTitle(dirName) {
	return capitalize(dirName.split('-').splice(1).join(' '));
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
