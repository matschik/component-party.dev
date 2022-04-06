const { FRAMEWORKS } = require('./config.cjs');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	plugins: ['prettier'],
	overrides: FRAMEWORKS.map(({ eslint }) => eslint)
};
