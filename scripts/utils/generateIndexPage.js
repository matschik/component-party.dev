import fs from 'fs';
import getDocContent from './getDocContent.js';

export default function generateIndexPage() {
	const template = fs.readFileSync('scripts/templates/index.base.md', 'utf8');
	fs.writeFileSync('src/pages/index.md', template.replace('<slot/>', getDocContent()), 'utf-8');
}
