import FRAMEWORKS from "./frameworks.mjs";

async function importDefault(moduleName) {
  const module = await import(moduleName);
  return module.default;
}

const getEslintConfigsByFrameworkId = new Map([
  [
    "svelte4",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const svelteParser = await importDefault("svelte-eslint-parser");
      const globalsBrowser = (await importDefault("globals")).browser;

      return [
        {
          files: [`${contentFilesPath}.svelte`],
          languageOptions: {
            parser: svelteParser,
          },
        },
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
          languageOptions: {
            globals: {
              ...globalsBrowser,
            },
          },
        },
      ];
    },
  ],
  [
    "lit",
    async ({ contentFilesPath }) => {
      const { configs } = await import("eslint-plugin-lit");
      const babelParser = await importDefault("@babel/eslint-parser");

      return [
        {
          ...configs["flat/recommended"],
          files: [`${contentFilesPath}.js`],
          languageOptions: {
            parser: babelParser,
          },
        },
      ];
    },
  ],
  [
    "emberOctane",
    async ({ contentFilesPath }) => {
      const eslintPluginEmberConfigRecommended = await importDefault(
        "eslint-plugin-ember/configs/recommended"
      );

      return [
        {
          ...eslintPluginEmberConfigRecommended[1],
          plugins: eslintPluginEmberConfigRecommended[0].plugins,
          files: [`${contentFilesPath}.js`],
          rules: eslintPluginEmberConfigRecommended[2].rules,
        },
      ];
    },
  ],
  [
    "svelte5",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const globalsBrowser = (await importDefault("globals")).browser;
      const eslintPluginSvelte = await importDefault("eslint-plugin-svelte");
      const svelteParser = await importDefault("svelte-eslint-parser");

      const eslintPluginSvelteConfig =
        eslintPluginSvelte.configs["flat/recommended"];

      return [
        {
          ...eslintPluginSvelteConfig[1],
          files: [`${contentFilesPath}.svelte`],
          plugins: eslintPluginSvelteConfig[0].plugins,
          rules: eslintPluginSvelteConfig[2].rules,
        },
        {
          files: [`${contentFilesPath}.svelte.js`],
          languageOptions: {
            parser: svelteParser,
          },
        },
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
          languageOptions: {
            globals: {
              ...globalsBrowser,
            },
          },
        },
      ];
    },
  ],
  [
    "emberPolaris",
    async ({ contentFilesPath }) => {
      const eslintPluginEmberConfigRecommended = await importDefault(
        "eslint-plugin-ember/configs/recommended"
      );

      return [
        {
          ...eslintPluginEmberConfigRecommended[1],
          plugins: eslintPluginEmberConfigRecommended[0].plugins,
          files: [`${contentFilesPath}.{gjs,gts,js}`],
          rules: eslintPluginEmberConfigRecommended[2].rules,
        },
      ];
    },
  ],
]);

/** @type {import('eslint').Linter.Config[]} */
const config = (
  await Promise.all(
    FRAMEWORKS.map(({ id }) => {
      const getEslintConfigs = getEslintConfigsByFrameworkId.get(id);
      if (typeof getEslintConfigs === "function") {
        return getEslintConfigs({
          contentFilesPath: `content/**/${id}/**/*`,
        });
      } else {
        console.warn(`[eslint] config missing for framework id '${id}'`);
      }
    }).filter(Boolean)
  )
).flat();

// console.log(config)

export default config;
