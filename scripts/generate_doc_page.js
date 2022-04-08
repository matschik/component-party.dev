import fs from 'fs';
import getDocContent from './utils/getDocContent.js';

async function main() {
	fs.writeFileSync('src/pages/doc.md', getDocContent(), 'utf-8');
}

main().catch(console.error);
