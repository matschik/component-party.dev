// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import getDocContent from './scripts/utils/getDocContent.js';

import fs from 'fs';

const DOC_PREFIX = 
`---
layout: ../layouts/BaseLayout.astro
---

`;

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/reference/configuration-reference/
	integrations: [tailwind(), svelte()],
	vite: {
		plugins: [
			{
				handleHotUpdate({ file }) {
					if (file.includes('/content')) {
						console.log('generate doc');
						fs.writeFileSync('src/pages/index.md', DOC_PREFIX + getDocContent(), 'utf-8');
					}
				},
			},
		],
	},
});
