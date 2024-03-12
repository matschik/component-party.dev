function sortAllFilenames(files, filenamesSorted) {
  return [
    ...filenamesSorted.map((filename) =>
      files.find(({ fileName }) => fileName === filename)
    ),
    ...(files.filter(({ fileName }) => !filenamesSorted.includes(fileName)) ||
      []),
  ].filter(Boolean);
}

const frameworks = [
  {
    id: "svelte4",
    title: "Svelte 4",
    frameworkName: "Svelte",
    isCurrentVersion: true,
    img: "framework/svelte.svg",
    eslint: {
      files: ["**/svelte4/*.svelte"],
      parser: "svelte-eslint-parser",
    },
    playgroundURL: "https://svelte.dev/repl",
    documentationURL: "https://svelte.dev/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
    },
    repositoryLink: "https://github.com/sveltejs/svelte",
    mainPackageName: "svelte",
  },
  {
    id: "react",
    title: "React",
    frameworkName: "React",
    isCurrentVersion: true,
    img: "framework/react.svg",
    eslint: {
      files: ["**/react/*.jsx", "**/react/*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    playgroundURL: "https://codesandbox.io/s/mystifying-goldberg-6wx04b",
    documentationURL: "https://reactjs.org/docs/getting-started.html",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.jsx"]);
    },
    repositoryLink: "https://github.com/facebook/react",
    mainPackageName: "react",
  },
  {
    id: "vue3",
    title: "Vue 3",
    frameworkName: "Vue",
    isCurrentVersion: true,
    img: "framework/vue.svg",
    eslint: {
      files: ["**/vue3/*.vue"],
      env: {
        "vue/setup-compiler-macros": true,
      },
      extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
      rules: {
        "vue/multi-word-component-names": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
    playgroundURL: "https://sfc.vuejs.org",
    documentationURL: "https://vuejs.org/guide",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/core",
    mainPackageName: "vue",
  },
  {
    id: "angular",
    title: "Angular",
    frameworkName: "Angular",
    isCurrentVersion: true,
    img: "framework/angular.svg",
    eslint: [
      {
        files: ["**/angular/**"],
        parserOptions: {
          project: ["tsconfig.app.json"],
          createDefaultProgram: true,
        },
        extends: [
          "plugin:@angular-eslint/recommended",
          // This is required if you use inline templates in Components
          "plugin:@angular-eslint/template/process-inline-templates",
        ],
        rules: {
          /**
           * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
           * recommended set provided by the @angular-eslint project would go here.
           */
          "@angular-eslint/directive-selector": [
            "error",
            { type: "attribute", prefix: "app", style: "camelCase" },
          ],
          "@angular-eslint/component-selector": [
            "error",
            { type: "element", prefix: "app", style: "kebab-case" },
          ],
        },
      },
      {
        files: ["**/angular/*.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          /**
           * Any template/HTML related rules you wish to use/reconfigure over and above the
           * recommended set provided by the @angular-eslint project would go here.
           */
        },
      },
    ],
    playgroundURL: "https://codesandbox.io/s/angular",
    documentationURL: "https://angular.io/docs",
    filesSorter(files) {
      return sortAllFilenames(files, [
        "index.html",
        "app.module.ts",
        "app.component.ts",
        "app.component.html",
      ]);
    },
    repositoryLink: "https://github.com/angular/angular",
    mainPackageName: "@angular/core",
  },
  {
    id: "lit",
    title: "Lit",
    frameworkName: "Lit",
    isCurrentVersion: true,
    img: "framework/lit.svg",
    eslint: {
      files: ["**/lit/**"],
      plugins: ["lit"],
      parser: "@babel/eslint-parser",
      extends: ["plugin:lit/recommended"],
    },
    playgroundURL: "https://lit.dev/playground",
    documentationURL: "https://lit.dev",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "x-app.js"]);
    },
    repositoryLink: "https://github.com/lit/lit",
    mainPackageName: "lit",
  },
  {
    id: "vue2",
    title: "Vue 2",
    frameworkName: "Vue",
    isCurrentVersion: false,
    img: "framework/vue.svg",
    eslint: {
      files: ["**/vue2/*.vue"],
      extends: ["eslint:recommended", "plugin:vue/recommended"],
      rules: {
        "vue/multi-word-component-names": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
    playgroundURL: "",
    documentationURL: "https://v2.vuejs.org",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/vue",
    mainPackageName: "vue@^2",
  },
  {
    id: "emberOctane",
    title: "Ember Octane",
    frameworkName: "Ember",
    isCurrentVersion: true,
    img: "framework/ember.svg",
    eslint: {
      files: ["**/emberOctane/**"],
      plugins: ["ember"],
      parser: "@babel/eslint-parser",
      extends: ["plugin:ember/recommended"],
    },
    playgroundURL: "https://ember-twiddle.com",
    documentationURL: "https://emberjs.com",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.hbs", "app.js"]);
    },
    repositoryLink: "https://github.com/emberjs/ember.js",
    mainPackageName: "ember-source",
  },
  {
    id: "solid",
    title: "Solid.js",
    frameworkName: "Solid",
    isCurrentVersion: true,
    img: "framework/solid.svg",
    eslint: {
      files: ["**/solid/*.jsx"],
      plugins: ["solid"],
      extends: ["eslint:recommended", "plugin:solid/recommended"],
    },
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://www.solidjs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.jsx"]);
    },
    repositoryLink: "https://github.com/solidjs/solid",
    mainPackageName: "solid-js",
  },
  {
    id: "alpine",
    title: "Alpine",
    frameworkName: "Alpine",
    isCurrentVersion: true,
    img: "framework/alpine.svg",
    eslint: {
      files: ["**/alpine/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL: "https://codesandbox.io/s/7br3q8",
    documentationURL: "https://alpinejs.dev/start-here",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html"]);
    },
    repositoryLink: "https://github.com/alpinejs/alpine",
    mainPackageName: "alpinejs",
  },
  {
    id: "svelte5",
    title: "Svelte 5 (preview)",
    frameworkName: "Svelte",
    isCurrentVersion: false,
    img: "framework/svelte.svg",
    eslint: {
      files: ["**/TODO-THIS-IS-DISABLED-svelte5/*.svelte"],
      parser: "svelte-eslint-parser",
    },
    playgroundURL: "https://svelte-5-preview.vercel.app/",
    documentationURL: "https://svelte-5-preview.vercel.app/docs",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
    },
    repositoryLink: "https://github.com/sveltejs/svelte",
    mainPackageName: "svelte",
  },
  {
    id: "emberPolaris",
    title: "Ember Polaris (preview)",
    frameworkName: "Ember",
    isCurrentVersion: false,
    img: "framework/ember.svg",
    eslint: {
      files: ["**/emberPolaris/**"],
      plugins: ["ember"],
      parser: "ember-eslint-parser",
      extends: [
        "eslint:recommended",
        "plugin:ember/recommended",
        "plugin:ember/recommended-gjs",
      ],
    },
    playgroundURL: "http://new.emberjs.com",
    documentationURL: "https://emberjs.com",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.hbs", "app.js"]);
    },
    repositoryLink: "https://github.com/emberjs/ember.js",
    mainPackageName: "ember-source",
  },
  {
    id: "mithril",
    title: "Mithril",
    frameworkName: "Mithril",
    isCurrentVersion: true,
    img: "framework/mithril.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      files: ["**/mithril/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL: "https://codesandbox.io/s/q99qzov66",
    documentationURL: "https://mithril.js.org/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js"]);
    },
    repositoryLink: "https://github.com/MithrilJS/mithril.js",
    mainPackageName: "mithril",
  },
  {
    id: "aurelia2",
    title: "Aurelia 2",
    frameworkName: "Aurelia",
    isCurrentVersion: true,
    img: "framework/aurelia.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ["**/aurelia2/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL:
      "https://stackblitz.com/edit/au2-conventions?file=src%2Fmy-app.html",
    documentationURL: "http://docs.aurelia.io",
    filesSorter(files) {
      return sortAllFilenames(files, ["app.html", "app.ts"]);
    },
    repositoryLink: "https://github.com/aurelia/aurelia",
    mainPackageName: "aurelia",
  },
  {
    id: "qwik",
    title: "Qwik",
    frameworkName: "Qwik",
    isCurrentVersion: true,
    img: "framework/qwik.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ["**/qwik/**"],
      extends: ["eslint:recommended", "plugin:qwik/recommended"],
      rules: {
        "qwik/valid-lexical-scope": "off",
      },
    },
    playgroundURL: "https://qwik.builder.io/playground",
    documentationURL: "https://qwik.builder.io/docs/overview",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.tsx"]);
    },
    repositoryLink: "https://github.com/BuilderIO/qwik",
    mainPackageName: "@builder.io/qwik",
  },
  {
    id: "marko",
    title: "Marko",
    frameworkName: "Marko",
    isCurrentVersion: true,
    img: "framework/marko.svg",
    eslint: {
      files: ["!**"], // Marko’s linter/prettyprinter doesn’t use eslint
    },
    playgroundURL: "https://markojs.com/playground/",
    documentationURL: "https://markojs.com/docs/getting-started/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.marko", "App.marko"]);
    },
    repositoryLink: "https://github.com/marko-js/marko",
    mainPackageName: "marko",
  },
  {
    id: "aurelia1",
    title: "Aurelia 1",
    frameworkName: "Aurelia",
    isCurrentVersion: false,
    img: "framework/aurelia.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ["**/aurelia1/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL: "https://codesandbox.io/s/ppmy26opw7",
    documentationURL: "http://aurelia.io/docs/",
    filesSorter(files) {
      return sortAllFilenames(files, ["app.html", "app.ts"]);
    },
    repositoryLink: "https://github.com/aurelia/framework",
    mainPackageName: "aurelia-framework",
  },
];

export function matchFrameworkId(id) {
  return frameworks.find(
    (framework) =>
      framework.id === id ||
      (framework.isCurrentVersion &&
        framework.frameworkName.toLowerCase() === id)
  );
}

export default frameworks;
