interface File {
  fileName: string;
  [key: string]: unknown;
}

function sortAllFilenames(files: File[], filenamesSorted: string[]): File[] {
  return [
    ...filenamesSorted.map((filename) => files.find(({ fileName }) => fileName === filename)),
    ...(files.filter(({ fileName }) => !filenamesSorted.includes(fileName)) || []),
  ].filter(Boolean) as File[];
}

/**
 * A specific released version of a framework, e.g. "Svelte 5" or "Vue 3".
 */
export interface FrameworkVersion {
  id: string;
  title: string;
  img: string;
  playgroundURL: string;
  documentationURL: string;
  filesSorter: (files: File[]) => File[];
  repositoryLink: string;
  mainPackageName: string;
  releaseDate: string;
}

/**
 * A framework family, e.g. "Svelte". The generic name (`id`) resolves to the
 * version referenced by `latestStable`, which is the single source of truth for
 * "which version is the current stable one" — making multiple-stable states
 * unrepresentable.
 */
export interface Framework {
  id: string;
  name: string;
  latestStable: string;
}

export const frameworkVersions: FrameworkVersion[] = [
  {
    id: "svelte5",
    title: "Svelte 5",
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
    id: "angularClassic",
    title: "Angular",
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
    id: "emberPolaris",
    title: "Ember Polaris",
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
    id: "emberOctane",
    title: "Ember Octane",
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
    id: "mithril",
    title: "Mithril",
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
    img: "framework/aurelia.svg",
    playgroundURL: "https://stackblitz.com/edit/au2-conventions?file=src%2Fmy-app.html",
    documentationURL: "http://docs.aurelia.io",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.ts", "app.html", "app.ts"]);
    },
    repositoryLink: "https://github.com/aurelia/aurelia",
    mainPackageName: "aurelia",
    releaseDate: "2021-01-19",
  },
  {
    id: "qwik",
    title: "Qwik",
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
    img: "framework/aurelia.svg",
    playgroundURL: "https://codesandbox.io/s/ppmy26opw7",
    documentationURL: "http://aurelia.io/docs/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.ts", "app.html", "app.ts"]);
    },
    repositoryLink: "https://github.com/aurelia/framework",
    mainPackageName: "aurelia-framework",
    releaseDate: "2016-01-26",
  },
  {
    id: "ripple",
    title: "Ripple",
    img: "framework/ripple.svg",
    playgroundURL: "https://www.ripple-ts.com/playground",
    documentationURL: "https://www.ripple-ts.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.js", "App.tsrx"]);
    },
    repositoryLink: "https://github.com/Ripple-TS/ripple",
    mainPackageName: "ripple",
    releaseDate: "2023-01-01",
  },
];

export const frameworks: Framework[] = [
  { id: "svelte", name: "Svelte", latestStable: "svelte5" },
  { id: "react", name: "React", latestStable: "react" },
  { id: "vue", name: "Vue", latestStable: "vue3" },
  { id: "angular", name: "Angular", latestStable: "angularRenaissance" },
  { id: "lit", name: "Lit", latestStable: "lit" },
  { id: "ember", name: "Ember", latestStable: "emberPolaris" },
  { id: "solid", name: "Solid", latestStable: "solid" },
  { id: "alpine", name: "Alpine", latestStable: "alpine" },
  { id: "mithril", name: "Mithril", latestStable: "mithril" },
  { id: "aurelia", name: "Aurelia", latestStable: "aurelia2" },
  { id: "qwik", name: "Qwik", latestStable: "qwik" },
  { id: "marko", name: "Marko", latestStable: "marko" },
  { id: "ripple", name: "Ripple", latestStable: "ripple" },
];

/**
 * Invariants, validated at module load so a misconfiguration fails fast instead
 * of silently resolving to the wrong version:
 *  - version ids are unique,
 *  - framework (family) ids are unique,
 *  - each family's `latestStable` references an existing version.
 */
function assertValidFrameworksConfig(versions: FrameworkVersion[], families: Framework[]): void {
  const errors: string[] = [];

  const versionIds = new Set<string>();
  for (const { id } of versions) {
    if (versionIds.has(id)) errors.push(`duplicate version id "${id}"`);
    versionIds.add(id);
  }

  const familyIds = new Set<string>();
  for (const family of families) {
    if (familyIds.has(family.id)) errors.push(`duplicate framework id "${family.id}"`);
    familyIds.add(family.id);
    if (!versionIds.has(family.latestStable)) {
      errors.push(
        `framework "${family.id}".latestStable points to unknown version "${family.latestStable}"`,
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid frameworks configuration:\n  - ${errors.join("\n  - ")}`);
  }
}

assertValidFrameworksConfig(frameworkVersions, frameworks);

/**
 * Resolve an id to a concrete framework version. Accepts either a framework
 * family id (e.g. "svelte" or "angular") or a version id (e.g. "svelte5").
 *
 * Family resolution takes precedence over version resolution: a generic name
 * always maps to its latest stable version, even when a (legacy) version shares
 * that id — e.g. "angular" resolves to Angular Renaissance, not the legacy
 * "angular" version.
 */
export function matchFrameworkId(id: string): FrameworkVersion | undefined {
  const family = frameworks.find((f) => f.id === id);
  if (family) {
    const stable = frameworkVersions.find((v) => v.id === family.latestStable);
    if (stable) return stable;
  }

  return frameworkVersions.find((v) => v.id === id);
}

/**
 * Get the latest stable version of a framework family, e.g. "svelte" -> Svelte 5.
 */
export function getLatestStableVersion(frameworkId: string): FrameworkVersion | undefined {
  const family = frameworks.find((f) => f.id === frameworkId);
  if (!family) return undefined;
  return frameworkVersions.find((v) => v.id === family.latestStable);
}
