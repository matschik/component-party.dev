import fs from 'fs';
import { FRAMEWORKS } from '../config.cjs';

function getArgs() {
	const [componentName] = process.argv.slice(2);
	return {
		componentName,
	};
}

const args = getArgs();

async function main() {
	fs.mkdirSync('new-section');

	const componentName = args.componentName || 'Component';

	for (const { id, ext } of FRAMEWORKS) {
		const dir = `new-section/${id}`;
		fs.mkdirSync(dir);
		fs.writeFileSync(`${dir}/${componentName}.${ext}`, '');
	}
}

main().catch(console.error);
