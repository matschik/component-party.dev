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
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			plugins: ['svelte3']
		},
		{
			files: ['*.jsx'],
			extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
			settings: {
				react: {
					version: 'detect'
				}
			}
		},
		{
			files: ['*.vue'],
			env: {
				'vue/setup-compiler-macros': true
			},
			extends: ['eslint:recommended', 'plugin:vue/vue3-recommended']
		}
	]
};
