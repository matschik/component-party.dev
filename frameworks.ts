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
  /** Id of the `Framework` family this version belongs to, e.g. "solid". */
  family: string;
  title: string;
  img: string;
  playgroundURL: string;
  documentationURL: string;
  filesSorter: (files: File[]) => File[];
  repositoryLink: string;
  mainPackageName: string;
  releaseDate: string;
  /** Official guide to upgrade from the previous version of the same framework. */
  migrationGuideURL?: string;
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
    family: "svelte",
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
    migrationGuideURL: "https://svelte.dev/docs/svelte/v5-migration-guide",
  },
  {
    id: "react",
    family: "react",
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
    family: "vue",
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
    migrationGuideURL: "https://v3-migration.vuejs.org/",
  },
  {
    id: "angularRenaissance",
    family: "angular",
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
    family: "angular",
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
    family: "lit",
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
    family: "ember",
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
    family: "ember",
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
    id: "solid2",
    family: "solid",
    title: "Solid 2",
    img: "framework/solid.svg",
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://docs.solidjs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
    },
    repositoryLink: "https://github.com/solidjs/solid",
    mainPackageName: "solid-js",
    releaseDate: "2026-11-16",
    migrationGuideURL: "https://docs.solidjs.com/migration/from-solid-1",
  },
  {
    id: "solid1",
    family: "solid",
    title: "Solid 1",
    img: "framework/solid.svg",
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://v1.solidjs.com/",
    filesSorter(files) {
      return sortAllFilenames(files, ["index.html", "main.jsx", "App.jsx"]);
    },
    repositoryLink: "https://github.com/solidjs/solid",
    mainPackageName: "solid-js@^1",
    releaseDate: "2021-06-28",
  },
  {
    id: "svelte4",
    family: "svelte",
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
    family: "vue",
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
    family: "alpine",
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
    family: "mithril",
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
    family: "aurelia",
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
    migrationGuideURL: "https://docs.aurelia.io/migrating-to-aurelia-2/migrating-to-aurelia-2",
  },
  {
    id: "qwik",
    family: "qwik",
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
    family: "marko",
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
    family: "aurelia",
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
    family: "ripple",
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
  { id: "solid", name: "Solid", latestStable: "solid2" },
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
 *  - each family's `latestStable` references an existing version,
 *  - each version names an existing family.
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
    if (versions.find((v) => v.id === family.latestStable)?.family !== family.id) {
      errors.push(
        `framework "${family.id}".latestStable points to "${family.latestStable}", not one of its versions`,
      );
    }
  }

  for (const version of versions) {
    if (!familyIds.has(version.family)) {
      errors.push(`version "${version.id}".family points to unknown framework "${version.family}"`);
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
/**
 * Two versions of the same framework, e.g. Solid 1 and Solid 2. Their page
 * reads as an upgrade: older release on the left.
 */
export function isUpgradePair(idA: string, idB: string): boolean {
  const a = frameworkVersions.find((v) => v.id === idA);
  const b = frameworkVersions.find((v) => v.id === idB);
  return !!a && !!b && a.id !== b.id && a.family === b.family;
}

/**
 * The order a pair is shown in: an upgrade pair goes from the older release to
 * the newer one; any other pair follows `frameworkVersions`.
 */
export function orderPair(idA: string, idB: string): [string, string] {
  if (isUpgradePair(idA, idB)) {
    const releaseDate = (id: string) => frameworkVersions.find((v) => v.id === id)!.releaseDate;
    return releaseDate(idA) <= releaseDate(idB) ? [idA, idB] : [idB, idA];
  }
  const index = (id: string) => frameworkVersions.findIndex((v) => v.id === id);
  return index(idA) <= index(idB) ? [idA, idB] : [idB, idA];
}

export function getLatestStableVersion(frameworkId: string): FrameworkVersion | undefined {
  const family = frameworks.find((f) => f.id === frameworkId);
  if (!family) return undefined;
  return frameworkVersions.find((v) => v.id === family.latestStable);
}
