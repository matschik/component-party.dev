<script>
  import { sections, snippets } from "../generatedContent/tree.js";
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
