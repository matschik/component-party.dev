<script lang="ts">
  import { SvelteMap, SvelteSet } from "svelte/reactivity";
  import { frameworks, matchFrameworkId } from "@frameworks";
  import FrameworkLabel from "./components/FrameworkLabel.svelte";
  import { sections, snippets } from "./generatedContent/tree.js";
  import snippetsImporterByFrameworkId from "./generatedContent/framework/index.js";
  import CodeEditor from "./components/CodeEditor.svelte";
  import createLocaleStorage from "./lib/createLocaleStorage.ts";
  import { watch } from "runed";
  import Header from "./components/Header.svelte";
  import Aside from "./components/Aside.svelte";
  import {
    FRAMEWORK_IDS_FROM_URL_KEY,
    FRAMEWORK_SEPARATOR,
  } from "./constants.ts";
  import { searchParams } from "sv-router";
  import { navigate } from "./router.ts";

  interface File {
    fileName: string;
    contentHtml: string;
    [key: string]: unknown;
  }

  interface FrameworkSnippet {
    frameworkId: string;
    snippetId: string;
    files: File[];
    playgroundURL: string;
    markdownFiles: File[];
    snippetEditHref: string;
  }

  const MAX_FRAMEWORK_NOBONUS = 9;
  const DEFAULT_FRAMEWORKS = ["react", "svelte5"];
  const FRAMEWORKS_BONUS = frameworks.slice(MAX_FRAMEWORK_NOBONUS);
  const frameworkIdsStorage = createLocaleStorage<string[]>(
    "framework_display",
    [],
  );

  const frameworkIdsSelected = new SvelteSet<string>();
  const frameworkIdsSelectedArr = $derived([...frameworkIdsSelected]);
  const frameworksSelected = $derived(
    frameworkIdsSelectedArr.map((id: string) => matchFrameworkId(id)),
  );
  const snippetsByFrameworkId = new SvelteMap<string, FrameworkSnippet[]>();
  let frameworkIdsSelectedInitialized = $state(false);
  const isVersusFrameworks = $derived(frameworksSelected.length === 2);
  const siteTitle = $derived(
    isVersusFrameworks
      ? `${frameworksSelected.map((f) => f!.title).join(" vs ")} - Component Party`
      : "Component Party",
  );
  const frameworkIdsFromSearchParam = $derived.by(() => {
    const value = searchParams.get(FRAMEWORK_IDS_FROM_URL_KEY);
    if (typeof value === "string") {
      return value.split(FRAMEWORK_SEPARATOR).filter(matchFrameworkId);
    }
    return [];
  });

  // handle on link click
  watch(
    [() => frameworkIdsFromSearchParam],
    () => {
      selectFrameworks(frameworkIdsFromSearchParam);
    },
    { lazy: true },
  );

  function selectFrameworks(frameworkIds: string[]) {
    frameworkIdsSelected.clear();
    for (const frameworkId of frameworkIds) {
      frameworkIdsSelected.add(frameworkId);
    }
    navigateWithFrameworkSelection();
  }

  function onInit() {
    const frameworkIdsFromStorage = frameworkIdsStorage
      .getJSON()
      .filter((id) => matchFrameworkId(id));

    // From search param
    if (frameworkIdsFromSearchParam.length > 0) {
      selectFrameworks(frameworkIdsFromSearchParam);
    } else if (frameworkIdsFromStorage.length > 0) {
      selectFrameworks(frameworkIdsFromStorage);
    } else {
      // Default frameworks
      selectFrameworks(DEFAULT_FRAMEWORKS);
    }

    frameworkIdsSelectedInitialized = true;
  }

  onInit();

  function toggleFrameworkId(frameworkId: string) {
    if (frameworkIdsSelected.has(frameworkId)) {
      frameworkIdsSelected.delete(frameworkId);
    } else {
      frameworkIdsSelected.add(frameworkId);
    }
    navigateWithFrameworkSelection();
  }

  async function navigateWithFrameworkSelection() {
    if (frameworkIdsSelected.size === 0) {
      searchParams.delete(FRAMEWORK_IDS_FROM_URL_KEY);
    } else {
      searchParams.set(
        FRAMEWORK_IDS_FROM_URL_KEY,
        frameworkIdsSelectedArr.join(FRAMEWORK_SEPARATOR),
      );
    }
  }

  let snippetsByFrameworkIdLoading = new SvelteSet<string>();
  let snippetsByFrameworkIdError = new SvelteSet<string>();

  watch([() => frameworkIdsSelected.entries()], () => {
    for (const frameworkId of frameworkIdsSelectedArr) {
      if (!snippetsByFrameworkId.has(frameworkId)) {
        snippetsByFrameworkIdError.delete(frameworkId);
        snippetsByFrameworkIdLoading.add(frameworkId);

        snippetsImporterByFrameworkId[frameworkId]()
          .then(
            ({
              default: frameworkSnippets,
            }: {
              default: FrameworkSnippet[];
            }) => {
              snippetsByFrameworkId.set(frameworkId, frameworkSnippets);
            },
          )
          .catch(() => {
            snippetsByFrameworkIdError.add(frameworkId);
          })
          .finally(() => {
            snippetsByFrameworkIdLoading.delete(frameworkId);
          });
      }
    }

    if (frameworkIdsSelected.size === 0) {
      navigate("/");
    }
  });

  let showBonusFrameworks = $state(false);

  const bonusFrameworks = $derived(
    FRAMEWORKS_BONUS.filter(({ id }) => !frameworkIdsSelected.has(id)),
  );

  const frameworksNotSelected = $derived(
    frameworks.filter(({ id }) => id && !frameworkIdsSelected.has(id)),
  );

  const headerFrameworks = $derived(
    [
      ...frameworksSelected.filter((f) => f),
      ...frameworksNotSelected.filter(
        (f) => f && !bonusFrameworks.find((bf) => bf.id === f.id),
      ),
      ...(showBonusFrameworks ? bonusFrameworks : []),
    ].filter((f): f is NonNullable<typeof f> => !!f),
  );
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<Header />

<div class="flex border-b border-gray-700">
  <Aside />
  <div class="pb-8 w-10 grow">
    <div
      class="flex px-6 lg:px-20 py-2 sticky top-0 z-20 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto"
      data-framework-id-selected-list={frameworkIdsSelectedArr.join(",")}
      data-testid="framework-selection-bar"
    >
      {#each headerFrameworks as framework (framework.id)}
        {#if framework}
          <button
            title={frameworkIdsSelected.has(framework.id)
              ? `Hide ${framework.title}`
              : `Display ${framework.title}`}
            class={[
              "text-sm flex-shrink-0 rounded border px-3 py-1 bg-gray-900 hover:bg-gray-800 transition-all mr-2",
              frameworkIdsSelected.has(framework.id)
                ? "border-blue-900"
                : "opacity-70 border-opacity-50 border-gray-700",
            ]}
            data-testid={`framework-button-${framework.id}`}
            onclick={() => {
              toggleFrameworkId(framework.id);
              if (frameworkIdsSelectedArr.length === 0) {
                frameworkIdsStorage.remove();
              } else {
                frameworkIdsStorage.setJSON(frameworkIdsSelectedArr);
              }
            }}
          >
            <FrameworkLabel id={framework.id} size={16} />
          </button>
        {/if}
      {/each}
      {#if bonusFrameworks.length > 0 && !showBonusFrameworks}
        <button
          title="show more frameworks"
          class="opacity-70 text-sm flex-shrink-0 rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2 flex items-center justify-center"
          data-testid="show-more-frameworks-button"
          onclick={() => {
            showBonusFrameworks = !showBonusFrameworks;
          }}
          aria-label="show more frameworks"
        >
          <span class="iconify ph--dots-three size-4" aria-hidden="true"></span>
        </button>
      {/if}
    </div>

    <main class="relative pt-6">
      <div>
        {#if frameworkIdsSelected.size === 0}
          <div class="space-y-4" data-testid="empty-state">
            <div class="flex justify-center">
              <span
                class="iconify ph--arrow-up size-6 animate-bounce"
                aria-hidden="true"
              ></span>
            </div>
            <div class="flex justify-center">
              <p
                class="text-lg opacity-80 flex items-center text-center space-x-3"
                data-testid="empty-state-message"
              >
                <img src="/popper.svg" alt="logo" class="size-6" />
                <span>
                  Please select a framework to view framework's snippets
                </span>
                <img src="/popper.svg" alt="logo" class="size-6" />
              </p>
            </div>
          </div>
        {:else}
          <div class="space-y-20">
            {#each sections as section (section.sectionId)}
              <div class="px-6 md:px-14 lg:px-20 max-w-full">
                <h2
                  id={section.sectionId}
                  class="header-anchor text-2xl font-bold"
                  data-testid={`section-${section.sectionId}`}
                >
                  {section.title}
                  <a
                    href={"#" + section.sectionId}
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    #
                  </a>
                </h2>

                <div class="space-y-8 mt-2">
                  {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet (snippet.snippetId)}
                    {@const snippetPathId =
                      section.sectionId + "." + snippet.snippetId}
                    <div
                      id={snippetPathId}
                      data-snippet-id={snippetPathId}
                      data-testid={`snippet-${snippetPathId}`}
                    >
                      <h3
                        class="header-anchor sticky py-2 top-[2.94rem] z-10 bg-[var(--bg-color)] font-semibold text-xl"
                        data-testid={`snippet-title-${snippetPathId}`}
                      >
                        {snippet.title}
                        <a
                          href={"#" + snippetPathId}
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          #
                        </a>
                      </h3>
                      {#if frameworkIdsSelectedInitialized}
                        <div
                          class="grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-y-8 gap-x-10 mt-2"
                        >
                          {#each frameworkIdsSelectedArr as frameworkId (frameworkId)}
                            {@const framework = matchFrameworkId(frameworkId)}
                            {@const frameworkSnippet = snippetsByFrameworkId
                              .get(frameworkId)
                              ?.find(
                                (s: FrameworkSnippet) =>
                                  s.snippetId === snippet.snippetId,
                              )}
                            {@const frameworkSnippetIsLoading =
                              snippetsByFrameworkIdLoading.has(frameworkId)}
                            {@const frameworkSnippetIsError =
                              snippetsByFrameworkIdError.has(frameworkId)}

                            {#if framework}
                              <div
                                data-testid={`framework-snippet-${frameworkId}-${snippet.snippetId}`}
                              >
                                <div
                                  class="flex justify-between items-center space-x-3"
                                >
                                  <h3
                                    class="m-0"
                                    data-testid={`framework-title-${frameworkId}-${snippet.snippetId}`}
                                  >
                                    <FrameworkLabel id={framework.id} />
                                  </h3>
                                  {#if frameworkSnippet}
                                    <div class="flex items-center space-x-3">
                                      {#if frameworkSnippet.playgroundURL}
                                        <a
                                          href={frameworkSnippet.playgroundURL}
                                          target="_blank"
                                          rel="noreferrer"
                                          class="opacity-50 hover:opacity-100 bg-gray-800 hover:bg-gray-700 py-1 px-2 rounded transition-all flex items-center gap-x-2"
                                          title={`Open playground for ${framework.title}`}
                                          aria-label={`Open playground for ${framework.title}`}
                                          data-testid={`playground-button-${frameworkId}-${snippet.snippetId}`}
                                        >
                                          <span
                                            class="iconify ph--play size-4"
                                            aria-hidden="true"
                                          ></span>
                                        </a>
                                      {/if}
                                    </div>
                                  {/if}
                                </div>
                                <div class="mt-2">
                                  {#if frameworkSnippet}
                                    {#if frameworkSnippet.files.length > 0}
                                      <CodeEditor
                                        files={frameworkSnippet.files}
                                        snippetEditHref={frameworkSnippet.snippetEditHref}
                                        data-testid={`code-editor-${frameworkId}-${snippet.snippetId}`}
                                      />
                                    {:else}
                                      <div
                                        class="bg-gray-800 text-white rounded-md mx-auto"
                                        data-testid={`missing-snippet-${frameworkId}-${snippet.snippetId}`}
                                      >
                                        <div
                                          class="text-center py-8 px-4 sm:px-6"
                                        >
                                          <div>
                                            <span
                                              class="block text-2xl tracking-tight font-bold"
                                              data-testid="missing-snippet-title"
                                            >
                                              Missing snippet
                                            </span>
                                            <span
                                              class="block text-lg mt-1 font-semibold space-x-1"
                                              data-testid="missing-snippet-message"
                                            >
                                              <span>
                                                Help us to improve Component
                                                Party
                                              </span>
                                              <img
                                                src="/popper.svg"
                                                alt="logo"
                                                class="size-5 m-0 inline-block"
                                              />
                                            </span>
                                          </div>
                                          <div class="mt-6 flex justify-center">
                                            <div
                                              class="inline-flex rounded-md shadow"
                                            >
                                              <a
                                                class="inline-flex space-x-2 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#161b22] hover:bg-[#161b22]/80 no-underline"
                                                href={frameworkSnippet.snippetEditHref}
                                                data-testid={`contribute-link-${frameworkId}-${snippet.snippetId}`}
                                              >
                                                <button
                                                  class="flex items-center space-x-3"
                                                >
                                                  <span
                                                    >Contribute on Github</span
                                                  >
                                                  <span
                                                    class="iconify simple-icons--github size-5"
                                                    aria-hidden="true"
                                                  ></span>
                                                </button>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    {/if}
                                  {:else if frameworkSnippetIsLoading}
                                    <div
                                      role="status"
                                      data-testid={`loading-snippet-${frameworkId}-${snippet.snippetId}`}
                                    >
                                      <div
                                        class="w-75px h-23px bg-[#0d1117] py-3 px-4 rounded-t"
                                      >
                                        <div
                                          class="h-2.5 rounded-full bg-gray-700 w-10 animate-pulse"
                                        ></div>
                                      </div>
                                      <div
                                        class="w-full h-164px bg-[#0d1117] px-4 py-7"
                                      >
                                        <div class="max-w-sm animate-pulse">
                                          <div
                                            class="h-3.5 rounded-full bg-gray-700 w-48 mb-4"
                                          ></div>
                                          <div
                                            class="h-3.5 rounded-full bg-gray-700 max-w-[360px] mb-2.5"
                                          ></div>
                                          <div
                                            class="h-3.5 rounded-full bg-gray-700 mb-4"
                                          ></div>
                                          <div
                                            class="h-3.5 rounded-full bg-gray-700 max-w-[330px] mb-2.5"
                                          ></div>
                                          <span
                                            class="sr-only"
                                            data-testid="loading-text"
                                            >Loading...</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  {:else if frameworkSnippetIsError}
                                    <p
                                      class="text-orange-500"
                                      data-testid={`error-snippet-${frameworkId}-${snippet.snippetId}`}
                                    >
                                      Error loading snippets. Please reload the
                                      page.
                                    </p>
                                  {/if}
                                </div>
                              </div>
                            {/if}
                          {/each}
                        </div>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </main>
  </div>
</div>

<style>
  .header-anchor > a {
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-weight: 500;
    transition:
      color 0.25s,
      opacity 0.25s;
    opacity: 0;
    text-decoration: none;
  }

  .header-anchor:hover > a {
    opacity: 1;
  }
</style>
