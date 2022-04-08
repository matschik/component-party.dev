import fs from 'fs';
import getDocContent from './getDocContent.js';

export default function generateIndexPage() {
	const template = fs.readFileSync('scripts/templates/README.base.md', 'utf8');
	fs.writeFileSync('README.md', template.replace('<slot/>', getDocContent()), 'utf-8');
}
