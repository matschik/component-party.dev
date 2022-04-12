import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import generateIndexPage from './scripts/utils/generateIndexPage.js';

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/reference/configuration-reference/
	integrations: [tailwind(), svelte()],
	vite: {
		plugins: [
			// {
			// 	handleHotUpdate({ file }) {
			// 		if (file.includes('/content') || file.includes('/scripts/utils')) {
			// 			generateIndexPage();
			// 		}
			// 	},
			// },
		],
	},
});
