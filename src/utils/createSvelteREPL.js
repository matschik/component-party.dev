import nodePath from 'path';

export default function createVue3REPL() {
	const BASE_URL = 'https://svelte-repl-site.vercel.app/#';

	function utoa(data) {
		return btoa(unescape(encodeURIComponent(data)));
	}

	function generateURLFromData(data) {
		return `${BASE_URL}${utoa(JSON.stringify(data))}`;
	}

	function fromContentByFilename(contentByFilename) {
		const data = [];
		for (const filename of Object.keys(contentByFilename)) {
			const content = contentByFilename[filename];
			const parsedFilename = nodePath.parse(filename);
			data.push({
				name: parsedFilename.name,
				type: parsedFilename.ext.split('.').pop(),
				source: content,
			});
		}
		const url = generateURLFromData(data);
		return url;
	}

	return {
		fromContentByFilename,
	};
}
