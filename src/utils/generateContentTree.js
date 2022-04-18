import fs from 'node:fs/promises';
import path from 'path';

const CONTENT_DIR = path.resolve('content');

export default async function generateContentTree() {
	const tree = [];

	const contentDirs = await fs.readdir(CONTENT_DIR);

	for (const contentDir of contentDirs) {
		const sectionDir = `${CONTENT_DIR}/${contentDir}`;
		const subSectionDirs = (await fs.readdir(sectionDir)).filter((path) => !path.includes('.'));
		const contentDirTitle = dirNameToTitle(contentDir);
		const treeNode = {
			id: contentDir.split('-').splice(1).join('-'),
			title: contentDirTitle,
			sections: [],
		};

		for (const subSectionDir of subSectionDirs) {
			const subSectionDirTitle = dirNameToTitle(subSectionDir);
			treeNode.sections.push({
				id: subSectionDir.split('-').splice(1).join('-'),
				title: subSectionDirTitle,
			});
		}

		tree.push(treeNode);
	}

	return tree;
}

function dirNameToTitle(dirName) {
	return capitalize(dirName.split('-').splice(1).join(' '));
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
