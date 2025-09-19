interface File {
  fileName: string;
  [key: string]: any;
}

function sortAllFilenames(files: File[], filenamesSorted: string[]): File[] {
  return [
    ...filenamesSorted.map((filename) =>
      files.find(({ fileName }) => fileName === filename),
    ),
    ...(files.filter(({ fileName }) => !filenamesSorted.includes(fileName)) ||
      []),
  ].filter(Boolean) as File[];
}

export interface Framework {
  id: string;
  title: string;
  frameworkName: string;
  isCurrentVersion: boolean;
  img: string;
  playgroundURL: string;
  documentationURL: string;
  filesSorter: (files: File[]) => File[];
  repositoryLink: string;
  mainPackageName: string;
}

const frameworks: Framework[] = [
  {
    id: "svelte5",
    title: "Svelte 5",
    frameworkName: "Svelte",
    isCurrentVersion: false,
    img: "framework/svelte.svg",
    playgroundURL: "https://svelte-5-preview.vercel.app/",
    documentationURL: "https://svelte-5-preview.vercel.app/docs",
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
    playgroundURL: "https://codesandbox.io/s/mystifying-goldberg-6wx04b",
    documentationURL: "https://reactjs.org/docs/getting-started.html",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
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
    playgroundURL: "https://sfc.vuejs.org",
    documentationURL: "https://vuejs.org/guide",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/core",
    mainPackageName: "vue",
  },
  {
    id: "angularRenaissance",
    title: "Angular Renaissance",
    frameworkName: "Angular",
    isCurrentVersion: true,
    img: "framework/angular-renaissance.svg",
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
    id: "angular",
    title: "Angular",
    frameworkName: "Angular",
    isCurrentVersion: false,
    img: "framework/angular.svg",
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
    playgroundURL: "https://lit.dev/playground",
    documentationURL: "https://lit.dev",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "x-app.js"]);
    },
    repositoryLink: "https://github.com/lit/lit",
    mainPackageName: "lit",
  },
  {
    id: "emberOctane",
    title: "Ember Octane",
    frameworkName: "Ember",
    isCurrentVersion: true,
    img: "framework/ember.svg",
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
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://www.solidjs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
    },
    repositoryLink: "https://github.com/solidjs/solid",
    mainPackageName: "solid-js",
  },
  {
    id: "svelte4",
    title: "Svelte 4",
    frameworkName: "Svelte",
    isCurrentVersion: true,
    img: "framework/svelte.svg",
    playgroundURL: "https://svelte.dev/repl",
    documentationURL: "https://svelte.dev/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
    },
    repositoryLink: "https://github.com/sveltejs/svelte",
    mainPackageName: "svelte",
  },
  {
    id: "vue2",
    title: "Vue 2",
    frameworkName: "Vue",
    isCurrentVersion: false,
    img: "framework/vue.svg",
    playgroundURL: "",
    documentationURL: "https://v2.vuejs.org",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/vue",
    mainPackageName: "vue@^2",
  },
  {
    id: "alpine",
    title: "Alpine",
    frameworkName: "Alpine",
    isCurrentVersion: true,
    img: "framework/alpine.svg",
    playgroundURL: "https://codesandbox.io/s/7br3q8",
    documentationURL: "https://alpinejs.dev/start-here",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html"]);
    },
    repositoryLink: "https://github.com/alpinejs/alpine",
    mainPackageName: "alpinejs",
  },
  {
    id: "emberPolaris",
    title: "Ember Polaris",
    frameworkName: "Ember",
    isCurrentVersion: false,
    img: "framework/ember.svg",
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
    playgroundURL: "https://codesandbox.io/s/q99qzov66",
    documentationURL: "https://mithril.js.org/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "app.js"]);
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
    playgroundURL:
      "https://stackblitz.com/edit/au2-conventions?file=src%2Fmy-app.html",
    documentationURL: "http://docs.aurelia.io",
    filesSorter(files) {
      return sortAllFilenames(files, [
        "index.html",
        "main.ts",
        "app.html",
        "app.ts",
      ]);
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
    playgroundURL: "https://qwik.builder.io/playground",
    documentationURL: "https://qwik.builder.io/docs/overview",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.tsx", "App.tsx"]);
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
    playgroundURL: "https://markojs.com/playground/",
    documentationURL: "https://markojs.com/docs/getting-started/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.marko"]);
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
    playgroundURL: "https://codesandbox.io/s/ppmy26opw7",
    documentationURL: "http://aurelia.io/docs/",
    filesSorter(files) {
      return sortAllFilenames(files, [
        "index.html",
        "main.ts",
        "app.html",
        "app.ts",
      ]);
    },
    repositoryLink: "https://github.com/aurelia/framework",
    mainPackageName: "aurelia-framework",
  },
  {
    id: "ripple",
    title: "Ripple",
    frameworkName: "Ripple",
    isCurrentVersion: true,
    img: "framework/ripple.svg",
    playgroundURL: "https://www.ripplejs.com/playground",
    documentationURL: "https://www.ripplejs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.ripple"]);
    },
    repositoryLink: "https://github.com/trueadm/ripple",
    mainPackageName: "ripple",
  },
];

export function matchFrameworkId(id: string): Framework | undefined {
  return frameworks.find(
    (framework) => framework.id === id,
    // ||(framework.isCurrentVersion &&
    //   framework.frameworkName.toLowerCase() === id)
  );
}

export default frameworks;
