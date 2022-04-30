import nodePath from 'path';

// Preact repl currently only supports 1 file
export default function createReactREPL() {
	const BASE_URL = 'https://preactjs.com/repl';

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
		return `${BASE_URL}?code=${encodeURIComponent(data[0].source)}`;
	}

	return {
		fromContentByFilename,
	};
}
