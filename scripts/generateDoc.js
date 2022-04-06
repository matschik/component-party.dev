import fs from 'fs';
import { FRAMEWORKS } from '../config.cjs';

async function main() {
	const srcDirs = fs.readdirSync('src');

	let rootReadmeContent = fs.readFileSync("README.base.md") + "\n\n";

	for(const framework of FRAMEWORKS){
		fs.writeFileSync(`docs/by-framework/${framework.id}.md`, `# Component Party for ${framework.title}\n\n`)
	}

	for (const srcDir of srcDirs) {
		const sectionDir = `src/${srcDir}`;
		const subSectionDirs = fs.readdirSync(sectionDir).filter((path) => !path.includes('.'));
		let fileContent = '';

		// write section title
		fileContent += `# ${dirNameToTitle(srcDir)}\n`;
		for(const framework of FRAMEWORKS){
			fs.appendFileSync(`docs/by-framework/${framework.id}.md`,  `# ${dirNameToTitle(srcDir)}\n`)
		}

		for (const subSectionDir of subSectionDirs) {

			// write subsection title
			fileContent += `## ${dirNameToTitle(subSectionDir)}\n`;
			for(const framework of FRAMEWORKS){
				fs.appendFileSync(`docs/by-framework/${framework.id}.md`,  `## ${dirNameToTitle(subSectionDir)}\n`)
			}
			const frameworkDirs = fs
				.readdirSync(`${sectionDir}/${subSectionDir}`)
				.filter((path) => !path.includes('.'));
				
			for (const frameworkDir of frameworkDirs) {
				fileContent += `### ${FRAMEWORKS.find((f) => f.id === frameworkDir).title}\n`;
				const files = fs.readdirSync(`${sectionDir}/${subSectionDir}/${frameworkDir}`);

				for (const file of files) {
					const frameworkFileContent = `\`\`\`${
						FRAMEWORKS.find((f) => f.id === frameworkDir).ext
					}\n${fs.readFileSync(
						`${sectionDir}/${subSectionDir}/${frameworkDir}/${file}`
					)}\n\`\`\`\n\n`;

					fileContent += frameworkFileContent

					fs.appendFileSync(`docs/by-framework/${frameworkDir}.md`,  frameworkFileContent)
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
