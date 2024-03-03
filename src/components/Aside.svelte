<script>
  import c from "classnames";
  import { sections, snippets } from "../generatedContent/tree.js";
  import { onMount, onDestroy } from "svelte";
  import throttle from "../lib/throttle.js";

  let largestVisibleSnippetId = null;

  function getLargestElement(elements) {
    let largestArea = 0;
    let largestElement = null;

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const visibleWidth =
        Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      if (visibleWidth > 0 && visibleHeight > 0) {
        const area = visibleWidth * visibleHeight;

        if (area > largestArea) {
          largestArea = area;
          largestElement = element;
        }
      }
    }

    return largestElement;
  }

  function listenLargestSnippetOnScroll() {
    function onScroll() {
      const largestSnippet = getLargestElement(
        document.querySelectorAll("[data-snippet-id]")
      );
      if (largestSnippet) {
        largestVisibleSnippetId = largestSnippet.dataset.snippetId;
      } else {
        largestVisibleSnippetId = null;
      }
    }

    const throttleOnScroll = throttle(onScroll, 100);

    document.addEventListener("scroll", throttleOnScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", throttleOnScroll);
    };
  }

  let unlistenLargestSnippetOnScroll;

  onMount(() => {
    unlistenLargestSnippetOnScroll = listenLargestSnippetOnScroll();
  });

  onDestroy(() => {
    unlistenLargestSnippetOnScroll && unlistenLargestSnippetOnScroll();
  });
</script>

<aside
  class="no-scroll hidden lg:block sticky flex-shrink-0 w-[300px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"
>
  <nav class="w-full text-base py-2 pl-4 pb-20">
    <ul class="space-y-6">
      {#each sections as section}
        <li>
          <a
            href={`#${section.sectionId}`}
            class={c(
              "inline-block w-full py-1.5 px-4 text-white font-semibold opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity",
              {
                "bg-gray-800":
                  largestVisibleSnippetId &&
                  largestVisibleSnippetId.startsWith(section.sectionId),
              }
            )}
          >
            {section.title}
          </a>
          <ul>
            {#each snippets.filter((s) => s.sectionId === section.sectionId) as snippet}
              <li>
                <a
                  href={`#${section.sectionId + "." + snippet.snippetId}`}
                  class={c(
                    "inline-block w-full py-1.5 px-4 text-white font-medium hover:bg-gray-800 rounded hover:opacity-100 transition-opacity",
                    section.sectionId + "." + snippet.snippetId ===
                      largestVisibleSnippetId
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
