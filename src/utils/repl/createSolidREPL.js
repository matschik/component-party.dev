import nodePath from 'path';
import { compressToURL } from '@matschik/lz-string';

export default () => {
	const BASE_URL = 'https://playground.solidjs.com/#';
	const SOURCE_PREFIX = `import { render } from "solid-js/web";\n`;
	const getSourceSuffix = (componentName) => `\n\nrender(() => <${componentName} />, document.getElementById("app"));\n`;

	function generateURLFromData(data) {
		return `${BASE_URL}${compressToURL(JSON.stringify(data))}`;
	}

	function fromContentByFilename(contentByFilename) {
		const data = Object.keys(contentByFilename).map((filename) => {
			const content = contentByFilename[filename];
			const parsedFilename = nodePath.parse(filename);
			const ext = parsedFilename.ext.split('.').pop();

			return {
				name: parsedFilename.name,
				type: ext === 'jsx' ? 'tsx' : ext,
				source: content.replaceAll('.jsx', '.tsx'),
			};
		});

		const mainFile = data[0];
		const mainComponentName = mainFile.name;
		mainFile.name = 'main';
		mainFile.type = 'tsx';
		mainFile.source = SOURCE_PREFIX + mainFile.source + getSourceSuffix(mainComponentName);

		return generateURLFromData(data);
	}

	return {
		fromContentByFilename,
	};
};
