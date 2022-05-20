import createAlpineREPL from './createAlpineREPL';
import createSvelteREPL from './createSvelteREPL';
import createVue3REPL from './createVue3REPL';
import createSolidREPL from './createSolidREPL';

export default {
	vue3: createVue3REPL(),
	svelte: createSvelteREPL(),
	alpine: createAlpineREPL(),
	solid: createSolidREPL(),
};
