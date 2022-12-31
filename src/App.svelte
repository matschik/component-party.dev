<script>
  import FRAMEWORKS from "../frameworks.mjs";
  import c from "classnames";
  import FrameworkLabel from "./components/FrameworkLabel.svelte";
  import { sections, snippets } from "./generatedContent/tree.js";
  import snippetsImporterByFrameworkId from "./generatedContent/framework/index.js";
  import { EyeSlashIcon } from "heroiconsvelte/24/outline";
  import CodeEditor from "./components/CodeEditor.svelte";

  let frameworkIdsSelected = new Set(["svelte"]);
  let snippetsByFrameworkId = new Map();

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6 text-white"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
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
      class="px-6 md:px-14 max-w-full lg:px-20 pt-10 prose prose-sm prose-invert prose-h1:scroll-mt-[5rem] prose-pre:mt-0 prose-h2:scroll-mt-[5rem]"
    >
      <div>
        {#each sections as section}
          <h1 id={section.sectionId}>
            {section.title}
            <a
              class="header-anchor"
              href={"#" + section.sectionId}
              aria-hidden="true"
              tabindex="-1"
            >
              #
            </a>
          </h1>

          {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
            <h2 id={snippet.snippetId}>
              {snippet.title}
              <a
                class="header-anchor"
                href={"#" + snippet.snippetId}
                aria-hidden="true"
                tabindex="-1"
              >
                #
              </a>
            </h2>
            <div
              class="grid grid-cols-1 2xl:grid-cols-2 gap-10"
              style="margin-top: 1rem;"
            >
              {#each [...frameworkIdsSelected] as frameworkId}
                {@const framework = FRAMEWORKS.find(
                  (f) => f.id === frameworkId
                )}
                {@const frameworkSnippet = snippetsByFrameworkId
                  .get(frameworkId)
                  ?.find((s) => s.snippetId === snippet.snippetId)}
                <div style:margin-top="0rem" style:order="0">
                  <div class="flex justify-between items-center space-x-3">
                    <h3 style="margin-top: 0rem; margin-bottom: 0rem;">
                      <FrameworkLabel id={framework.id} />
                    </h3>
                    <div class="flex items-center space-x-3">
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
                  <div class="mt-2">
                    {#if frameworkSnippet}
                      <CodeEditor
                        files={frameworkSnippet.files}
                        editHref={`https://github.com/matschik/component-party/tree/main/content/${snippet.sectionDirName}/${snippet.snippetDirName}/${frameworkId}`}
                      />
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          {/each}
        {/each}
      </div>
    </main>
  </div>
</div>

<style>
  .header-anchor {
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-weight: 500;
    transition: color 0.25s, opacity 0.25s;
    opacity: 0;
    text-decoration: none;
  }

  h1:hover .header-anchor,
  h2:hover .header-anchor {
    opacity: 100;
  }
</style>
