export default function createVue3REPL() {
	const BASE_URL = 'https://sfc.vuejs.org/#';

	function utoa(data) {
		return btoa(unescape(encodeURIComponent(data)));
	}

	function generateURLFromData(data) {
		return `${BASE_URL}${utoa(JSON.stringify(data))}`;
	}

	function fromContentByFilename(contentByFilename) {
		const data = Object.assign({}, contentByFilename, {
			'import-map.json': JSON.stringify({ vue: 'https://sfc.vuejs.org/vue.runtime.esm-browser.js' }),
		});
		const url = generateURLFromData(data);
		return url;
	}

	return {
		fromContentByFilename,
	};
}
