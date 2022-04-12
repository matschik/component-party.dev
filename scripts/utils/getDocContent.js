import fs from 'fs';
import path from 'path';
import { FRAMEWORKS } from '../../config.cjs';
import kebabCase from 'lodash.kebabcase';

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

		let fileContent = `# ${contentDirTitle}${addHeaderAnchor(contentDirTitle)}\n`;

		for (const subSectionDir of subSectionDirs) {
			const subSectionDirTitle = dirNameToTitle(subSectionDir);
			treeNode.sections.push({
				id: subSectionDir.split('-').splice(1).join('-'),
				title: subSectionDirTitle,
			});
			// write subsection title
			fileContent += `## ${subSectionDirTitle}${addHeaderAnchor(subSectionDirTitle)}\n`;

			for (const framework of FRAMEWORKS) {
				function addSnippetWrap(content) {
					return `\`\`\`${framework.ext}\n${content}\n\`\`\`\n\n`;
				}
				const imgTag = framework.img ? `<img src="${framework.img}" alt="${framework.id}" width="20" height="20" class="framework-logo" />` : '';
				fileContent += `### ${imgTag} ${framework.title}\n`;

				const frameworkDirPath = `${sectionDir}/${subSectionDir}/${framework.id}`;
				if (fs.existsSync(frameworkDirPath)) {
					const files = fs.readdirSync(frameworkDirPath);

					for (const file of files) {
						const parsedFile = path.parse(file);
						const currentFileContent = fs.readFileSync(`${frameworkDirPath}/${file}`);
						const frameworkFileContent = parsedFile.ext === '.md' ? `${currentFileContent}\n` : addSnippetWrap(currentFileContent);
						fileContent += frameworkFileContent;
					}
				} else {
					fileContent += `<pre>Oops, missing snippet ! <a href="https://github.com/matschik/component-party/tree/main/${sectionDir}/${subSectionDir}">You can help us by contributing on Github.</a></pre>\n`;
				}
			}
		}

		content += fileContent;
		tree.push(treeNode);
	}

	fs.writeFileSync('src/tree.js', `export default ${JSON.stringify(tree, null, 2)}`, 'utf8');

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

function addHeaderAnchor(id){
	return `<a class="header-anchor" href="#${kebabCase(id)}" aria-hidden="true" tabindex="-1">#</a>`
}