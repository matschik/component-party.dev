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
      const { configs: litConfigs } = await import("eslint-plugin-lit");
      const babelParser = await importDefault("@babel/eslint-parser");

      return [
        {
          ...litConfigs["flat/recommended"],
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
  [
    "solid",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const solid = await importDefault(
        "eslint-plugin-solid/configs/recommended"
      );
      return [
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
        },
        {
          files: [`${contentFilesPath}.{js,jsx}`],
          ...solid,
        },
      ];
    },
  ],
  [
    "mithril",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const globalsBrowser = (await importDefault("globals")).browser;
      return [
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
          languageOptions: {
            globals: globalsBrowser,
          },
        },
      ];
    },
  ],
  [
    "vue2",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const pluginVue = await importDefault("eslint-plugin-vue");
      const vue2Configs = pluginVue.configs["flat/vue2-recommended"];

      return [
        ...vue2Configs.map((config) => ({
          files: [`${contentFilesPath}.vue`],
          ...config,
        })),
        {
          files: [`${contentFilesPath}.vue`],
          rules: {
            "vue/multi-word-component-names": "off",
          },
        },
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
        },
      ];
    },
  ],
  [
    "vue3",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const pluginVue = await importDefault("eslint-plugin-vue");
      const globalsBrowser = (await importDefault("globals")).browser;
      const vue3Configs = pluginVue.configs["flat/recommended"];

      return [
        ...vue3Configs.map((config) => ({
          files: [`${contentFilesPath}.vue`],
          ...config,
        })),
        {
          files: [`${contentFilesPath}.vue`],
          rules: {
            "vue/multi-word-component-names": "off",
          },
        },
        {
          files: [`${contentFilesPath}.js`],
          rules: js.configs.recommended.rules,
          languageOptions: {
            globals: globalsBrowser,
          },
        },
      ];
    },
  ],
  [
    "alpine",
    () => {
      // no js in content files => no eslint
      return [];
    },
  ],
  [
    "marko",
    () => {
      // Marko’s linter/prettyprinter doesn’t use eslint
      return [];
    },
  ],
  [
    "aurelia1",
    async ({ contentFilesPath }) => {
      const tsParser = await import("@typescript-eslint/parser");
      const tseslint = await import("typescript-eslint");

      return [
        ...tseslint.configs.recommended.map((config) => ({
          files: [`${contentFilesPath}.ts`],
          ...config,
          languageOptions: {
            parser: tsParser,
          },
        })),
      ];
    },
  ],
  [
    "aurelia2",
    async ({ contentFilesPath }) => {
      const tsParser = await import("@typescript-eslint/parser");
      const tseslint = await import("typescript-eslint");

      return [
        ...tseslint.configs.recommended.map((config) => ({
          files: [`${contentFilesPath}.ts`],
          ...config,
          languageOptions: {
            parser: tsParser,
          },
        })),
      ];
    },
  ],
  [
    "react",
    async ({ contentFilesPath }) => {
      const js = await importDefault("@eslint/js");
      const reactPlugin = await importDefault("eslint-plugin-react");
      const globalsBrowser = (await importDefault("globals")).browser;

      const configs = [
        reactPlugin.configs.flat.recommended,
        reactPlugin.configs.flat["jsx-runtime"],
        {
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      ];

      return [
        ...configs.map((config) => ({
          ...config,
          files: [`${contentFilesPath}.jsx`],
        })),
        {
          ...js.configs.recommended,
          files: [`${contentFilesPath}.js`],
          languageOptions: {
            globals: globalsBrowser,
          },
        },
      ];
    },
  ],
  [
    "qwik",
    async ({ contentFilesPath }) => {
      const tsParser = await import("@typescript-eslint/parser");
      const tseslint = await import("typescript-eslint");

      return [
        ...tseslint.configs.recommended.map((config) => ({
          files: [`${contentFilesPath}.tsx`],
          ...config,
          languageOptions: {
            parser: tsParser,
          },
        })),
      ];
    },
  ],
  [
    "angular",
    async ({ contentFilesPath }) => {
      const tseslint = await import("typescript-eslint");
      const js = await importDefault("@eslint/js");
      const angular = await importDefault("angular-eslint");

      return tseslint.config(
        {
          // Everything in this config object targets our TypeScript files (Components, Directives, Pipes etc)
          files: [`${contentFilesPath}.ts`],
          extends: [
            // Apply the recommended core rules
            js.configs.recommended,
            // Apply the recommended TypeScript rules
            ...tseslint.configs.recommended,
            // Optionally apply stylistic rules from typescript-eslint that improve code consistency
            ...tseslint.configs.stylistic,
            // Apply the recommended Angular rules
            ...angular.configs.tsRecommended,
          ],
          // Set the custom processor which will allow us to have our inline Component templates extracted
          // and treated as if they are HTML files (and therefore have the .html config below applied to them)
          processor: angular.processInlineTemplates,
          // Override specific rules for TypeScript files (these will take priority over the extended configs above)
          rules: {
            "@angular-eslint/directive-selector": [
              "error",
              {
                type: "attribute",
                prefix: "app",
                style: "camelCase",
              },
            ],
            "@angular-eslint/component-selector": [
              "error",
              {
                type: "element",
                prefix: "app",
                style: "kebab-case",
              },
            ],
          },
        },
        {
          // Everything in this config object targets our HTML files (external templates,
          // and inline templates as long as we have the `processor` set on our TypeScript config above)
          files: [`${contentFilesPath}.html`],
          extends: [
            // Apply the recommended Angular template rules
            ...angular.configs.templateRecommended,
            // Apply the Angular template rules which focus on accessibility of our apps
            ...angular.configs.templateAccessibility,
          ],
          rules: {},
        }
      );
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
