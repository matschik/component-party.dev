interface File {
  fileName: string;
  [key: string]: unknown;
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
  frameworkNameId: string;
  isLatestStable: boolean;
  img: string;
  playgroundURL: string;
  documentationURL: string;
  filesSorter: (files: File[]) => File[];
  repositoryLink: string;
  mainPackageName: string;
  releaseDate: string;
}

export const frameworks: Framework[] = [
  {
    id: "svelte5",
    title: "Svelte 5",
    frameworkName: "Svelte",
    frameworkNameId: "svelte",
    isLatestStable: false,
    img: "framework/svelte.svg",
    playgroundURL: "https://svelte.dev/playground",
    documentationURL: "https://svelte.dev",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
    },
    repositoryLink: "https://github.com/sveltejs/svelte",
    mainPackageName: "svelte",
    releaseDate: "2024-10-01",
  },
  {
    id: "react",
    title: "React",
    frameworkName: "React",
    frameworkNameId: "react",
    isLatestStable: true,
    img: "framework/react.svg",
    playgroundURL: "https://codesandbox.io/s/mystifying-goldberg-6wx04b",
    documentationURL: "https://reactjs.org",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
    },
    repositoryLink: "https://github.com/facebook/react",
    mainPackageName: "react",
    releaseDate: "2013-05-29",
  },
  {
    id: "vue3",
    title: "Vue 3",
    frameworkName: "Vue",
    frameworkNameId: "vue",
    isLatestStable: true,
    img: "framework/vue.svg",
    playgroundURL: "https://play.vuejs.org/",
    documentationURL: "https://vuejs.org/guide",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/core",
    mainPackageName: "vue",
    releaseDate: "2020-09-18",
  },
  {
    id: "angularRenaissance",
    title: "Angular Renaissance",
    frameworkName: "Angular",
    frameworkNameId: "angular",
    isLatestStable: true,
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
    releaseDate: "2024-11-01",
  },
  {
    id: "angular",
    title: "Angular",
    frameworkName: "Angular",
    frameworkNameId: "angular",
    isLatestStable: false,
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
    releaseDate: "2010-10-20",
  },
  {
    id: "lit",
    title: "Lit",
    frameworkName: "Lit",
    frameworkNameId: "lit",
    isLatestStable: true,
    img: "framework/lit.svg",
    playgroundURL: "https://lit.dev/playground",
    documentationURL: "https://lit.dev",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "x-app.js"]);
    },
    repositoryLink: "https://github.com/lit/lit",
    mainPackageName: "lit",
    releaseDate: "2021-05-27",
  },
  {
    id: "emberOctane",
    title: "Ember Octane",
    frameworkName: "Ember",
    frameworkNameId: "ember",
    isLatestStable: true,
    img: "framework/ember.svg",
    playgroundURL: "https://ember-twiddle.com",
    documentationURL: "https://emberjs.com",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.hbs", "app.js"]);
    },
    repositoryLink: "https://github.com/emberjs/ember.js",
    mainPackageName: "ember-source",
    releaseDate: "2019-12-01",
  },
  {
    id: "solid",
    title: "Solid.js",
    frameworkName: "Solid",
    frameworkNameId: "solid",
    isLatestStable: true,
    img: "framework/solid.svg",
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://www.solidjs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
    },
    repositoryLink: "https://github.com/solidjs/solid",
    mainPackageName: "solid-js",
    releaseDate: "2021-06-28",
  },
  {
    id: "svelte4",
    title: "Svelte 4",
    frameworkName: "Svelte",
    frameworkNameId: "svelte",
    isLatestStable: true,
    img: "framework/svelte.svg",
    playgroundURL: "https://svelte.dev/repl",
    documentationURL: "https://svelte.dev/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
    },
    repositoryLink: "https://github.com/sveltejs/svelte",
    mainPackageName: "svelte",
    releaseDate: "2023-06-01",
  },
  {
    id: "vue2",
    title: "Vue 2",
    frameworkName: "Vue",
    frameworkNameId: "vue",
    isLatestStable: false,
    img: "framework/vue.svg",
    playgroundURL: "",
    documentationURL: "https://v2.vuejs.org",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.vue"]);
    },
    repositoryLink: "https://github.com/vuejs/vue",
    mainPackageName: "vue@^2",
    releaseDate: "2016-09-30",
  },
  {
    id: "alpine",
    title: "Alpine",
    frameworkName: "Alpine",
    frameworkNameId: "alpine",
    isLatestStable: true,
    img: "framework/alpine.svg",
    playgroundURL: "https://codesandbox.io/s/7br3q8",
    documentationURL: "https://alpinejs.dev/start-here",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html"]);
    },
    repositoryLink: "https://github.com/alpinejs/alpine",
    mainPackageName: "alpinejs",
    releaseDate: "2019-11-06",
  },
  {
    id: "emberPolaris",
    title: "Ember Polaris",
    frameworkName: "Ember",
    frameworkNameId: "ember",
    isLatestStable: false,
    img: "framework/ember.svg",
    playgroundURL: "http://new.emberjs.com",
    documentationURL: "https://emberjs.com",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "app.hbs", "app.js"]);
    },
    repositoryLink: "https://github.com/emberjs/ember.js",
    mainPackageName: "ember-source",
    releaseDate: "2024-12-01",
  },
  {
    id: "mithril",
    title: "Mithril",
    frameworkName: "Mithril",
    frameworkNameId: "mithril",
    isLatestStable: true,
    img: "framework/mithril.svg",
    playgroundURL: "https://codesandbox.io/s/q99qzov66",
    documentationURL: "https://mithril.js.org/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "app.js"]);
    },
    repositoryLink: "https://github.com/MithrilJS/mithril.js",
    mainPackageName: "mithril",
    releaseDate: "2014-03-07",
  },
  {
    id: "aurelia2",
    title: "Aurelia 2",
    frameworkName: "Aurelia",
    frameworkNameId: "aurelia",
    isLatestStable: true,
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
    releaseDate: "2021-01-19",
  },
  {
    id: "qwik",
    title: "Qwik",
    frameworkName: "Qwik",
    frameworkNameId: "qwik",
    isLatestStable: true,
    img: "framework/qwik.svg",
    playgroundURL: "https://qwik.builder.io/playground",
    documentationURL: "https://qwik.builder.io/docs/overview",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.tsx", "App.tsx"]);
    },
    repositoryLink: "https://github.com/BuilderIO/qwik",
    mainPackageName: "@builder.io/qwik",
    releaseDate: "2022-09-23",
  },
  {
    id: "marko",
    title: "Marko",
    frameworkName: "Marko",
    frameworkNameId: "marko",
    isLatestStable: true,
    img: "framework/marko.svg",
    playgroundURL: "https://markojs.com/playground/",
    documentationURL: "https://markojs.com/docs/getting-started/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "App.marko"]);
    },
    repositoryLink: "https://github.com/marko-js/marko",
    mainPackageName: "marko",
    releaseDate: "2014-04-09",
  },
  {
    id: "aurelia1",
    title: "Aurelia 1",
    frameworkName: "Aurelia",
    frameworkNameId: "aurelia",
    isLatestStable: false,
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
    releaseDate: "2016-01-26",
  },
  {
    id: "ripple",
    title: "Ripple",
    frameworkName: "Ripple",
    frameworkNameId: "ripple",
    isLatestStable: true,
    img: "framework/ripple.svg",
    playgroundURL: "https://www.ripplejs.com/playground",
    documentationURL: "https://www.ripplejs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.ripple"]);
    },
    repositoryLink: "https://github.com/trueadm/ripple",
    mainPackageName: "ripple",
    releaseDate: "2023-01-01",
  },
];

export function matchFrameworkId(id: string): Framework | undefined {
  // First try to find by exact ID
  let framework = frameworks.find((f) => f.id === id);

  // If not found, try to find by framework name ID and return the latest stable version
  if (!framework) {
    const latestStable = getLatestStableFrameworkByFrameworkName(id);
    if (latestStable) {
      framework = latestStable;
    }
  }

  return framework;
}

/**
 * Get all frameworks that belong to a specific framework name
 */
export function getFrameworksByFrameworkName(
  frameworkNameId: string,
): Framework[] {
  return frameworks.filter(
    (framework) => framework.frameworkNameId === frameworkNameId,
  );
}

/**
 * Get the latest stable framework for a given framework name
 */
export function getLatestStableFrameworkByFrameworkName(
  frameworkNameId: string,
): Framework | undefined {
  return frameworks.find(
    (framework) =>
      framework.frameworkNameId === frameworkNameId && framework.isLatestStable,
  );
}

/**
 * Get all unique framework name IDs
 */
export function getFrameworkNameIds(): string[] {
  return [...new Set(frameworks.map((framework) => framework.frameworkNameId))];
}

/**
 * Get framework name information including all versions and latest stable
 */
export function getFrameworkNameInfo(frameworkNameId: string): {
  frameworkNameId: string;
  frameworks: Framework[];
  latestStable: Framework | undefined;
  allVersions: string[];
} {
  const familyFrameworks = getFrameworksByFrameworkName(frameworkNameId);
  const latestStable = getLatestStableFrameworkByFrameworkName(frameworkNameId);

  return {
    frameworkNameId,
    frameworks: familyFrameworks,
    latestStable,
    allVersions: familyFrameworks.map((f) => f.id),
  };
}
