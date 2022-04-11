const FRAMEWORKS = [
	{
		id: 'svelte',
		title: 'Svelte',
		ext: 'svelte',
		img: "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg",
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
		img: "https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg",
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
		img: "https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67",
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
		img: "https://github.com/angular/angular/raw/master/aio/src/assets/images/logos/angular/angular.png",
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
