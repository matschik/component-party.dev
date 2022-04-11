const FRAMEWORKS = [
	{
		id: 'svelte',
		title: 'Svelte',
		ext: 'svelte',
		img: "https://raw.githubusercontent.com/matschik/component-party/main/public/framework/svelte.svg",
		eslint: {
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			plugins: ['svelte3'],
		},
	},
	{
		id: 'react',
		title: 'React',
		ext: 'jsx',
		img: "https://raw.githubusercontent.com/matschik/component-party/main/public/framework/react.svg",
		eslint: {
			files: ['*.jsx', '*.tsx'],
			extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
	},
	{
		id: 'vue3',
		title: 'Vue 3',
		ext: 'vue',
		img: "https://raw.githubusercontent.com/matschik/component-party/main/public/framework/vue.svg",
		eslint: {
			files: ['*.vue'],
			env: {
				'vue/setup-compiler-macros': true,
			},
			extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
		},
	},
	{
		id: 'angular',
		title: 'Angular',
		ext: 'ts',
		img: "https://raw.githubusercontent.com/matschik/component-party/main/public/framework/angular.svg",
		eslint: [
			{
				files: ['**/angular/*.ts'],
				parserOptions: {
					project: ['tsconfig.app.json', 'tsconfig.spec.json'],
					createDefaultProgram: true,
				},
				extends: [
					'plugin:@angular-eslint/recommended',
					// This is required if you use inline templates in Components
					'plugin:@angular-eslint/template/process-inline-templates',
				],
				rules: {
					/**
					 * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
					 * recommended set provided by the @angular-eslint project would go here.
					 */
					'@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
					'@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
				},
			},
			{
				files: ['**/angular/*.html'],
				extends: ['plugin:@angular-eslint/template/recommended'],
				rules: {
					/**
					 * Any template/HTML related rules you wish to use/reconfigure over and above the
					 * recommended set provided by the @angular-eslint project would go here.
					 */
				},
			},
		],
	},
];

module.exports = { FRAMEWORKS };
