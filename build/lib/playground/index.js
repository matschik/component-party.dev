import createAlpinePlayground from "./createAlpinePlayground.js";
import createSveltePlayground from "./createSveltePlayground.js";
import createVue3Playground from "./createVue3Playground.js";
import createSolidPlayground from "./createSolidPlayground.js";
import createMarkoPlayground from "./createMarkoPlayground.js";

export default {
  vue3: createVue3Playground(),
  svelte: createSveltePlayground(),
  alpine: createAlpinePlayground(),
  solid: createSolidPlayground(),
  marko: createMarkoPlayground(),
};
