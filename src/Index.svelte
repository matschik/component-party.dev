<script>
  import FRAMEWORKS, { matchFrameworkId } from "../frameworks.mjs";
  import c from "classnames";
  import FrameworkLabel from "./components/FrameworkLabel.svelte";
  import { sections, snippets } from "./generatedContent/tree.js";
  import snippetsImporterByFrameworkId from "./generatedContent/framework/index.js";
  import { PlayIcon, PencilIcon, ArrowUpIcon } from "heroiconsvelte/24/outline";
  import CodeEditor from "./components/CodeEditor.svelte";
  import AppNotificationCenter from "./components/AppNotificationCenter.svelte";
  import createLocaleStorage from "./lib/createLocaleStorage.js";
  import { getContext, onDestroy, onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Aside from "./components/Aside.svelte";
  import GithubIcon from "./components/GithubIcon.svelte";

  const { currentRoute, navigate } = getContext("router");

  const frameworkIdsStorage = createLocaleStorage("framework_display");

  function removeSearchParamKeyFromURL(k) {
    // Get the current search params as an object
    const searchParams = new URLSearchParams(window.location.search);

    if (!searchParams.has(k)) {
      // The key doesn't exist, so don't do anything
      return;
    }

    // Remove the parameter you want to remove
    searchParams.delete(k);

    let newUrl = window.location.pathname;
    if (searchParams.toString().length > 0) {
      // There are still search params, so include the `?` character
      newUrl += `?${searchParams}`;
    }

    // Update the URL without reloading the page
    history.replaceState({}, "", newUrl);
  }

  const frameworkIdsFromURLKey = "f";
  let frameworkIdsSelected = new Set();
  let snippetsByFrameworkId = new Map();
  let frameworkIdsSelectedInitialized = false;
  let isVersusFrameworks = false;
  let onMountCallbacks = new Set();
  let isMounted = false;
  const siteTitle = "Component Party";

  const unsubscribeCurrentRoute = currentRoute.subscribe(($currentRoute) => {
    window.scrollTo(0, 0);
    isVersusFrameworks = false;
    document.title = siteTitle;

    if ($currentRoute.path === "/") {
      if (isMounted) {
        handleInitialFrameworkIdsSelectedFromStorage({ useDefaults: false });
      } else {
        onMountCallbacks.add(() =>
          handleInitialFrameworkIdsSelectedFromStorage({ useDefaults: true })
        );
      }
    } else if ($currentRoute.params?.versus) {
      const versusFrameworks = handleVersus($currentRoute.params.versus);
      if (versusFrameworks) {
        isVersusFrameworks = true;
        frameworkIdsSelected = new Set(versusFrameworks.map((f) => f.id));
        frameworkIdsSelectedInitialized = true;
        document.title = `${versusFrameworks
          .map((f) => f.title)
          .join(" vs ")} - ${siteTitle}`;
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  });

  onDestroy(unsubscribeCurrentRoute);

  function handleInitialFrameworkIdsSelectedFromStorage({ useDefaults }) {
    if (frameworkIdsSelectedInitialized) {
      return;
    }
    let frameworkIdsSelectedOnInit = [];

    const url = new URL(window.location.href);

    const frameworkIdsFromURLStr = url.searchParams.get(frameworkIdsFromURLKey);

    if (frameworkIdsFromURLStr) {
      const frameworkIdsFromURL = frameworkIdsFromURLStr
        .split(",")
        .filter(matchFrameworkId);
      if (frameworkIdsFromURL.length > 0) {
        frameworkIdsSelectedOnInit = frameworkIdsFromURL;
      } else {
        removeSearchParamKeyFromURL(frameworkIdsFromURLKey);
      }
    }

    if (frameworkIdsSelectedOnInit.length === 0) {
      const frameworkIdsFromStorage = frameworkIdsStorage
        .getJSON()
        ?.filter(matchFrameworkId);
      if (frameworkIdsFromStorage?.length > 0) {
        frameworkIdsSelectedOnInit = frameworkIdsFromStorage;
      }
    }

    if (useDefaults && frameworkIdsSelectedOnInit.length === 0) {
      frameworkIdsSelectedOnInit = ["react", "svelte4"];
    }

    frameworkIdsSelected = new Set(frameworkIdsSelectedOnInit);
    frameworkIdsSelectedInitialized = true;
  }

  onMount(() => {
    isMounted = true;
    for (const callback of onMountCallbacks) {
      callback();
    }
    onMountCallbacks.clear();
    onMountCallbacks = onMountCallbacks;
  });

  function saveFrameworkIdsSelectedOnStorage() {
    frameworkIdsStorage.setJSON([...frameworkIdsSelected]);
    removeSearchParamKeyFromURL(frameworkIdsFromURLKey);
  }

  function toggleFrameworkId(frameworkId) {
    if (frameworkIdsSelected.has(frameworkId)) {
      frameworkIdsSelected.delete(frameworkId);
    } else {
      frameworkIdsSelected.add(frameworkId);
    }
    frameworkIdsSelected = frameworkIdsSelected;
    saveFrameworkIdsSelectedOnStorage();
  }

  $: {
    async function importFrameworkSnippets(frameworkIds) {
      for (const frameworkId of frameworkIds) {
        if (!snippetsByFrameworkId.has(frameworkId)) {
          const frameworkSnippets = (
            await snippetsImporterByFrameworkId[frameworkId]()
          ).default;
          snippetsByFrameworkId.set(frameworkId, frameworkSnippets);
        }
      }

      snippetsByFrameworkId = snippetsByFrameworkId;
    }

    importFrameworkSnippets([...frameworkIdsSelected]);
  }

  const MAX_FRAMEWORK_NB_INITIAL_DISPLAYED = 10;

  const FRAMEWORKS_INITIAL_DISPLAYED = FRAMEWORKS.slice(
    0,
    MAX_FRAMEWORK_NB_INITIAL_DISPLAYED
  );

  const FRAMEWORKS_MORE = FRAMEWORKS.slice(MAX_FRAMEWORK_NB_INITIAL_DISPLAYED);

  $: frameworksSelected = [...frameworkIdsSelected].map(matchFrameworkId);

  $: frameworksNotSelected = FRAMEWORKS_INITIAL_DISPLAYED.filter(
    (f) => !frameworkIdsSelected.has(f.id)
  );

  $: frameworksMoreNotSelected = FRAMEWORKS_MORE.filter(
    (f) => !frameworkIdsSelected.has(f.id)
  );

  let showBonusFrameworks = false;

  function handleVersus(versus) {
    const fids = versus.split("-vs-");

    if (fids.length !== 2) {
      return;
    }

    const frameworks = fids.map(matchFrameworkId);

    if (frameworks.some((f) => !f)) {
      return;
    }

    return frameworks;
  }
</script>

<AppNotificationCenter />

<Header {frameworksSelected} />

<div class="flex border-b border-gray-700">
  <Aside />
  <div class="pb-8 w-10 grow">
    <div
      class="flex px-6 lg:px-20 py-2 sticky top-0 z-20 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto"
      data-framework-id-selected-list={[...frameworkIdsSelected].join(",")}
    >
      {#each [...frameworksSelected, ...frameworksNotSelected] as framework (framework.id)}
        <button
          title={`Display ${framework.title}`}
          class={c(
            "text-sm flex-shrink-0 rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2",
            frameworkIdsSelected.has(framework.id)
              ? "border-blue-500"
              : "opacity-70"
          )}
          on:click={() => {
            toggleFrameworkId(framework.id);
            if (isVersusFrameworks && $currentRoute.path !== "/") {
              navigate("/");
            }
          }}
        >
          <FrameworkLabel id={framework.id} size={15} />
        </button>
      {/each}
      {#if showBonusFrameworks}
        {#each frameworksMoreNotSelected as framework (framework.id)}
          <button
            title={`Display ${framework.title}`}
            class={c(
              "text-sm flex-shrink-0 rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2",
              frameworkIdsSelected.has(framework.id)
                ? "border-blue-500"
                : "opacity-70"
            )}
            on:click={() => toggleFrameworkId(framework.id)}
          >
            <FrameworkLabel id={framework.id} size={15} />
          </button>
        {/each}
      {:else if frameworksMoreNotSelected.length > 0}
        <button
          title="more"
          class="opacity-70 text-sm flex-shrink-0 rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2"
          on:click={() => {
            showBonusFrameworks = !showBonusFrameworks;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      {/if}
    </div>

    <main class="relative pt-10">
      <div>
        {#if frameworkIdsSelected.size === 0}
          <div class="space-y-4">
            <div class="flex justify-center">
              <ArrowUpIcon class="size-6 animate-bounce" />
            </div>
            <div class="flex justify-center">
              <p
                class="text-lg opacity-80 flex items-center text-center space-x-3"
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
          <div
            class="max-w-full prose prose-sm prose-invert prose-h1:font-semibold prose-h2:font-medium prose-h3:font-medium prose-h1:scroll-mt-[5rem] prose-pre:mt-0 prose-h2:scroll-mt-[5rem]"
          >
            {#each sections as section}
              <div class="px-6 md:px-14 lg:px-20 max-w-full">
                <h1 id={section.sectionId} class="header-anchor">
                  {section.title}
                  <a
                    href={"#" + section.sectionId}
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    #
                  </a>
                </h1>

                {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
                  <div
                    id={section.sectionId + "." + snippet.snippetId}
                    data-snippet-id={section.sectionId +
                      "." +
                      snippet.snippetId}
                  >
                    <h2
                      class="header-anchor sticky py-2 top-[2.9531rem] z-10 bg-[var(--bg-color)]"
                    >
                      {snippet.title}
                      <a
                        href={"#" + snippet.snippetId}
                        aria-hidden="true"
                        tabindex="-1"
                      >
                        #
                      </a>
                    </h2>
                    {#if frameworkIdsSelectedInitialized}
                      <div
                        class="grid grid-cols-1 2xl:grid-cols-2 gap-x-10"
                        style="margin-top: 1rem;"
                      >
                        {#each [...frameworkIdsSelected] as frameworkId (frameworkId)}
                          {@const framework = matchFrameworkId(frameworkId)}
                          {@const frameworkSnippet = snippetsByFrameworkId
                            .get(frameworkId)
                            ?.find((s) => s.snippetId === snippet.snippetId)}
                          {#if frameworkSnippet}
                            <div style:margin-top="0rem" style:order="0">
                              <div
                                class="flex justify-between items-center space-x-3"
                              >
                                <h3
                                  style="margin-top: 0rem; margin-bottom: 0rem;"
                                >
                                  <FrameworkLabel id={framework.id} />
                                </h3>
                                <div class="flex items-center space-x-3">
                                  {#if frameworkSnippet.playgroundURL}
                                    <a
                                      href={frameworkSnippet.playgroundURL}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <button
                                        class="opacity-50 hover:opacity-100 bg-gray-800 hover:bg-gray-700 py-1 px-1.5 rounded transition-all"
                                        title={`Open playground for ${framework.title}`}
                                        aria-label={`Open playground for ${framework.title}`}
                                      >
                                        <PlayIcon class="h-4 w-4" />
                                      </button>
                                    </a>
                                  {/if}
                                  <a
                                    href={frameworkSnippet.snippetEditHref}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <button
                                      class="opacity-50 hover:opacity-100 bg-gray-800 hover:bg-gray-700 py-1 px-1.5 rounded transition-all"
                                      title="Edit on Github"
                                      aria-label="Edit on Github"
                                    >
                                      <PencilIcon class="h-4 w-4" />
                                    </button>
                                  </a>
                                </div>
                              </div>
                              <div class="mt-2">
                                {#if frameworkSnippet.markdownFiles.length > 0}
                                  <div class="space-y-2">
                                    {#each frameworkSnippet.markdownFiles as markdownFile}
                                      <div>
                                        {@html markdownFile.contentHtml}
                                      </div>
                                    {/each}
                                  </div>
                                {:else if frameworkSnippet.files.length > 0}
                                  <CodeEditor files={frameworkSnippet.files} />
                                {:else}
                                  <div
                                    class="bg-gray-800 text-white rounded-md mx-auto"
                                  >
                                    <div class="text-center py-8 px-4 sm:px-6">
                                      <div>
                                        <span
                                          class="block text-2xl tracking-tight font-bold"
                                        >
                                          Missing snippet
                                        </span>
                                        <span
                                          class="block text-lg mt-1 font-semibold space-x-1"
                                        >
                                          <span>
                                            Help us to improve Component Party
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
                                          >
                                            <button
                                              class="flex items-center space-x-3"
                                            >
                                              <span>Contribute on Github</span>
                                              <GithubIcon class="h-5 w-5" />
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
    opacity: 100;
  }
</style>
