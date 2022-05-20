import { getParameters } from 'codesandbox/lib/api/define.js';

export default function createAlpineREPL() {
	const BASE_URL = 'https://codesandbox.io/api/v1/sandboxes/define?embed=1&parameters=';
	const BASE_PREFIX = `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Alpine.js Playground</title>\n    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>\n  </head>\n  <body>\n\n`;
	const BASE_SUFFIX = `\n  </body>\n</html>`;

	function generateURLFromData(parameters) {
		return `${BASE_URL}${parameters}`;
	}

	function fromContentByFilename(contentByFilename) {
		const parameters = getParameters({
			files: {
				...contentByFilename,
				'package.json': {
					content: { dependencies: {} },
				},
				'index.html': {
					content: BASE_PREFIX + (contentByFilename['index.html']?.content || '') + BASE_SUFFIX,
				},
				'sandbox.config.json': {
					content: '{\n  "template": "static"\n}',
				},
			},
		});

		return generateURLFromData(parameters);
	}

	return {
		fromContentByFilename,
	};
}
