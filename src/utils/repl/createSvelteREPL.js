import nodePath from 'path';

export default function createSvelteREPL() {
	const BASE_URL = 'https://svelte-repl.vercel.app/#';

	function utoa(data) {
		return btoa(unescape(encodeURIComponent(data)));
	}

	function generateURLFromData(data) {
		return `${BASE_URL}${utoa(JSON.stringify(data))}`;
	}

	function fromContentByFilename(contentByFilename) {
		const data = Object.keys(contentByFilename).map((filename) => {
			const content = contentByFilename[filename];
			const parsedFilename = nodePath.parse(filename);
			return {
				name: parsedFilename.name,
				type: parsedFilename.ext.split('.').pop(),
				source: content,
			};
		});

		const url = generateURLFromData(data);
		return url;
	}

	return {
		fromContentByFilename,
	};
}
