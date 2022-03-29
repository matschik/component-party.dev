import fs from 'fs';

function getArgs() {
	const [componentName] = process.argv.slice(2);
	return {
		componentName
	};
}

const args = getArgs();

async function main() {
	fs.mkdirSync('new-section');

	const frameworks = [
		{
			id: 'svelte',
			ext: 'svelte'
		},
		{
			id: 'react',
			ext: 'jsx'
		},
		{
			id: 'vue3',
			ext: 'vue'
		}
	];

	const componentName = args.componentName || 'Component';

	for (const { id, ext } of frameworks) {
		const dir = `new-section/${id}`;
		fs.mkdirSync(dir);
		fs.writeFileSync(`${dir}/${componentName}.${ext}`, '');
	}
}

main().catch(console.error);
