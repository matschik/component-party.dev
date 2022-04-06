const FRAMEWORKS = [
	{
		id: 'svelte',
		title: 'Svelte',
		ext: 'svelte',
        eslint: {
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			plugins: ['svelte3']
		}
	},
	{
		id: 'react',
		title: 'React',
		ext: 'jsx',
        eslint: {
			files: ['*.jsx', '*.tsx'],
			extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
			settings: {
				react: {
					version: 'detect'
				}
			}
		}
	},
	{
		id: 'vue3',
		title: 'Vue 3',
		ext: 'vue',
        eslint: {
			files: ['*.vue'],
			env: {
				'vue/setup-compiler-macros': true
			},
			extends: ['eslint:recommended', 'plugin:vue/vue3-recommended']
		}
	}
];

module.exports = {FRAMEWORKS}