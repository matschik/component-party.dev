<script>
  import c from "classnames";
  import { sections, snippets } from "../generatedContent/tree.js";
  export let visibleSectionIds = new Set();
  export let visibleSnippetIds = new Set();
</script>

<aside
  class="hidden lg:block sticky flex-shrink-0 w-[300px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"
>
  <nav class="font-semibold w-full text-base py-2 pl-4 pb-20">
    <ul class="space-y-6">
      {#each sections as section}
        <li>
          <a
            href={`#${section.sectionId}`}
            class={c(
              "inline-block w-full py-1.5 px-4 text-white opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity",
              {
                "bg-gray-800": visibleSectionIds.has(section.sectionId),
              }
            )}
          >
            {section.title}
          </a>
          <ul>
            {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
              <li>
                <a
                  href={`#${snippet.snippetId}`}
                  class={c(
                    "inline-block w-full py-1.5 px-4 text-white hover:bg-gray-800 rounded hover:opacity-100 transition-opacity",
                    visibleSnippetIds.has(
                      section.sectionId + "." + snippet.snippetId
                    )
                      ? "bg-gray-800 opacity-70"
                      : "opacity-50"
                  )}
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
