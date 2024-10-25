import createAlpinePlayground from "./createAlpinePlayground.js";
import createSvelte5Playground from "./createSvelte5Playground.js";
import createVue3Playground from "./createVue3Playground.js";
import createSolidPlayground from "./createSolidPlayground.js";
import createMarkoPlayground from "./createMarkoPlayground.js";

export default {
  vue3: createVue3Playground(),
  svelte5: createSvelte5Playground(),
  alpine: createAlpinePlayground(),
  solid: createSolidPlayground(),
  marko: createMarkoPlayground(),
};
