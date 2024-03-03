<script>
  import FRAMEWORKS from "../frameworks.mjs";
  import c from "classnames";
  import FrameworkLabel from "./components/FrameworkLabel.svelte";
  import { sections, snippets } from "./generatedContent/tree.js";
  import snippetsImporterByFrameworkId from "./generatedContent/framework/index.js";
  import { PlayIcon, PencilIcon, ArrowUpIcon } from "heroiconsvelte/24/outline";
  import CodeEditor from "./components/CodeEditor.svelte";
  import AppNotificationCenter from "./components/AppNotificationCenter.svelte";
  import createLocaleStorage from "./lib/createLocaleStorage.js";
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Aside from "./components/Aside.svelte";
  import GithubIcon from "./components/GithubIcon.svelte";

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

  let frameworkIdsSelected = new Set();
  let snippetsByFrameworkId = new Map();

  let frameworkIdsSelectedStorageInitialized = false;

  const frameworkIdsFromURLKey = "f";

  onMount(function handleInitialFrameworkIdsSelected() {
    let frameworkIdsSelectedOnInit = [];

    const url = new URL(window.location.href);

    const frameworkIdsFromURLStr = url.searchParams.get(frameworkIdsFromURLKey);

    if (frameworkIdsFromURLStr) {
      const frameworkIdsFromURL = frameworkIdsFromURLStr
        .split(",")
        .filter((fId) => FRAMEWORKS.find((framework) => framework.id === fId));
      if (frameworkIdsFromURL.length > 0) {
        frameworkIdsSelectedOnInit = frameworkIdsFromURL;
      } else {
        removeSearchParamKeyFromURL(frameworkIdsFromURLKey);
      }
    }

    if (frameworkIdsSelectedOnInit.length === 0) {
      const frameworkIdsFromStorage = frameworkIdsStorage.getJSON();
      if (frameworkIdsFromStorage?.length > 0) {
        frameworkIdsSelectedOnInit = frameworkIdsFromStorage.map((x) =>
          x === "svelte" ? "svelte4" : x
        );
      }
    }

    if (frameworkIdsSelectedOnInit.length === 0) {
      frameworkIdsSelectedOnInit = ["svelte4", "react"];
    }

    frameworkIdsSelected = new Set(frameworkIdsSelectedOnInit);
    frameworkIdsSelectedStorageInitialized = true;
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

  $: frameworksSelected = [...frameworkIdsSelected].map((id) =>
    FRAMEWORKS.find((f) => f.id === id)
  );

  $: frameworksNotSelected = FRAMEWORKS_INITIAL_DISPLAYED.filter(
    (f) => !frameworkIdsSelected.has(f.id)
  );

  $: frameworksMoreNotSelected = FRAMEWORKS_MORE.filter(
    (f) => !frameworkIdsSelected.has(f.id)
  );

  let showBonusFrameworks = false;
</script>

<AppNotificationCenter />

<Header {frameworksSelected} />

<div class="flex border-b border-gray-700">
  <Aside />
  <div class="pb-8 w-10 grow">
    <div
      class="flex px-6 lg:px-20 py-2 sticky top-0 z-20 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto"
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
          on:click={() => toggleFrameworkId(framework.id)}
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
                    <!-- bg-[var(--bg-color)] -->
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
                    {#if frameworkIdsSelectedStorageInitialized}
                      <div
                        class="grid grid-cols-1 2xl:grid-cols-2 gap-x-10"
                        style="margin-top: 1rem;"
                      >
                        {#each [...frameworkIdsSelected] as frameworkId (frameworkId)}
                          {@const framework = FRAMEWORKS.find(
                            (f) => f.id === frameworkId
                          )}
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

<footer class="bg-gray-900" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8">
        <img
          class="h-7"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Company name"
        />
        <p class="text-sm leading-6 text-gray-300">
          Making the world a better place through constructing elegant
          hierarchies.
        </p>
        <div class="flex space-x-6">
          <a href="/" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="/" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">Instagram</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="/" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">X</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
              />
            </svg>
          </a>
          <a href="/" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">GitHub</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="/" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">YouTube</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">
              Solutions
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Marketing</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Analytics</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Commerce</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Insights</a
                >
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Documentation</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Guides</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >API Status</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Jobs</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Press</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Partners</a
                >
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Claim</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Privacy</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >Terms</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
      <p class="text-xs leading-5 text-gray-400">
        &copy; 2020 Your Company, Inc. All rights reserved.
      </p>
    </div>
  </div>
</footer>

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
