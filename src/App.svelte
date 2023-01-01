<script>
  import FRAMEWORKS from "../frameworks.mjs";
  import c from "classnames";
  import FrameworkLabel from "./components/FrameworkLabel.svelte";
  import { sections, snippets } from "./generatedContent/tree.js";
  import snippetsImporterByFrameworkId from "./generatedContent/framework/index.js";
  import {
    EyeSlashIcon,
    PlayIcon,
    PencilIcon,
  } from "heroiconsvelte/24/outline";
  import CodeEditor from "./components/CodeEditor.svelte";
  import AppNotificationCenter from "./components/AppNotificationCenter.svelte";
  import GithubIcon from "./components/GithubIcon.svelte";
  import createLocaleStorage from "./lib/createLocaleStorage.js";
  import { onMount } from "svelte";

  const frameworkIdsSelectedStorage = createLocaleStorage("framework_display");

  let frameworkIdsSelected = new Set();
  let snippetsByFrameworkId = new Map();

  let frameworkIdsSelectedStorageInitialized = false;

  onMount(() => {
    frameworkIdsSelected = new Set(frameworkIdsSelectedStorage.getJSON());
    frameworkIdsSelectedStorageInitialized = true;
  });

  $: {
    if (frameworkIdsSelectedStorageInitialized) {
      frameworkIdsSelectedStorage.setJSON([...frameworkIdsSelected]);
    }
  }

  function hideFrameworkId(frameworkId) {
    frameworkIdsSelected.delete(frameworkId);
    frameworkIdsSelected = frameworkIdsSelected;
  }

  function toggleFrameworkId(frameworkId) {
    if (frameworkIdsSelected.has(frameworkId)) {
      frameworkIdsSelected.delete(frameworkId);
    } else {
      frameworkIdsSelected.add(frameworkId);
    }
    frameworkIdsSelected = frameworkIdsSelected;
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
</script>

<AppNotificationCenter />

<header class="backdrop-blur bg-gray-900/80 border-b border-gray-700">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <a class="font-semibold text-lg flex items-center space-x-3" href="/">
        <img src="/popper.svg" alt="logo" class="w-5 h-5" />
        <span>Component party</span>
      </a>

      <div>
        <a
          href="https://github.com/matschik/component-party"
          title="Contribute on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon class="h-6 w-6" />
          <span class="sr-only">github</span>
        </a>
      </div>
    </div>
  </div>
</header>

<div class="flex">
  <aside
    class="hidden lg:block sticky flex-shrink-0 w-[300px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"
  >
    <nav class="font-semibold w-full text-base py-2 pl-4 pb-20">
      <ul class="space-y-6">
        {#each sections as section}
          <li>
            <a
              href={`#${section.sectionId}`}
              class="inline-block w-full py-1.5 px-4 text-white opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity"
            >
              {section.title}
            </a>
            <ul>
              {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
                <li>
                  <a
                    href={`#${snippet.snippetId}`}
                    class="inline-block w-full py-1.5 px-4 text-white opacity-50 hover:bg-gray-800 rounded hover:opacity-100 transition-opacity"
                  >
                    {snippet.title}
                  </a>
                </li>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <div class="pb-8 w-full">
    <div
      class="flex px-6 lg:px-20 py-2 sticky top-0 z-10 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto"
    >
      {#each FRAMEWORKS as framework}
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
    </div>

    <main
      id="main-content"
      class="px-6 md:px-14 lg:px-20 max-w-full  pt-10 prose prose-sm prose-invert prose-h1:scroll-mt-[5rem] prose-pre:mt-0 prose-h2:scroll-mt-[5rem]"
    >
      <div>
        {#each sections as section}
          <h1 id={section.sectionId} class="header-anchor">
            {section.title}
            <a href={"#" + section.sectionId} aria-hidden="true" tabindex="-1">
              #
            </a>
          </h1>

          {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
            <h2 id={snippet.snippetId} class="header-anchor">
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
                class="grid grid-cols-1 2xl:grid-cols-2 gap-10"
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
                      <div class="flex justify-between items-center space-x-3">
                        <h3 style="margin-top: 0rem; margin-bottom: 0rem;">
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
                            href={`https://github.com/matschik/component-party/tree/main/content/${snippet.sectionDirName}/${snippet.snippetDirName}/${frameworkId}`}
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
                          <div>
                            <button
                              class="opacity-50 hover:opacity-100 bg-gray-800 hover:bg-gray-700 py-1 px-1.5 rounded transition-all"
                              title={`Hide ${framework.title} snippets`}
                              aria-label={`Hide ${framework.title} snippets`}
                              on:click={() => hideFrameworkId(framework.id)}
                            >
                              <EyeSlashIcon class="h-4 w-4" />
                            </button>
                          </div>
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
                        {/if}
                      </div>
                    </div>
                  {/if}
                {/each}
              </div>
            {/if}
          {/each}
        {/each}
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
    transition: color 0.25s, opacity 0.25s;
    opacity: 0;
    text-decoration: none;
  }

  .header-anchor:hover > a {
    opacity: 100;
  }
</style>
