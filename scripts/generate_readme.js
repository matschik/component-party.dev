import fs from 'fs';
import getDocContent from './utils/getDocContent.js';

async function main() {
	let readmeContent = fs.readFileSync('README.base.md') + '\n\n';
	
	readmeContent += getDocContent()

	// create /README.md
	fs.writeFileSync('README.md', readmeContent, 'utf-8');
}

main().catch(console.error);

