<script lang="ts">
  import { sections, snippets } from "../generatedContent/tree.js";
  import { onMount } from "svelte";
  import throttle from "just-throttle";

  let largestVisibleSnippetId: string = $state("");

  function getLargestElement(elements: NodeListOf<Element>): Element | null {
    let largestArea = 0;
    let largestElement: Element | null = null;
    let firstFullyVisibleElement: Element | null = null;

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const visibleWidth =
        Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      if (visibleWidth > 0 && visibleHeight > 0) {
        const area = visibleWidth * visibleHeight;

        // Check if element is fully visible
        const isFullyVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.right <= window.innerWidth;

        // Prioritize first fully visible element
        if (isFullyVisible && !firstFullyVisibleElement) {
          firstFullyVisibleElement = element;
        }

        // Track largest element as fallback
        if (area > largestArea) {
          largestArea = area;
          largestElement = element;
        }
      }
    }

    // Return first fully visible element if found, otherwise largest element
    return firstFullyVisibleElement || largestElement;
  }

  function scrollToElement(elementId: string) {
    const target = document.getElementById(elementId);
    if (target) {
      // Update URL hash
      window.history.pushState(null, "", `#${elementId}`);
      // Scroll to target
      target.scrollIntoView({ block: "start" });
    }
  }

  onMount(function listenLargestSnippetOnScroll() {
    function onScroll() {
      const largestSnippet = getLargestElement(
        document.querySelectorAll("[data-snippet-id]"),
      );
      if (largestSnippet) {
        largestVisibleSnippetId =
          largestSnippet.getAttribute("data-snippet-id") ?? "";
      } else {
        largestVisibleSnippetId = "";
      }
    }

    const throttleOnScroll = throttle(onScroll, 100);

    document.addEventListener("scroll", throttleOnScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", throttleOnScroll);
    };
  });
</script>

<aside
  class="no-scroll hidden lg:block sticky flex-shrink-0 w-[240px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"
>
  <nav class="w-full text-base py-2 pl-4 pb-20">
    <ul class="space-y-6">
      {#each sections as section (section.sectionId)}
        <li>
          <button
            class={[
              "inline-block w-full py-1.5 px-4 text-white font-semibold opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity text-left",
              {
                "bg-gray-800":
                  largestVisibleSnippetId &&
                  largestVisibleSnippetId.startsWith(section.sectionId),
              },
            ]}
            onclick={() => scrollToElement(section.sectionId)}
          >
            {section.title}
          </button>
          <ul>
            {#each snippets.filter((s: any) => s.sectionId === section.sectionId) as snippet (snippet.snippetId)}
              {@const snippetPathId =
                section.sectionId + "." + snippet.snippetId}
              <li>
                <button
                  class={[
                    "inline-block w-full py-1.5 px-4 text-white font-medium hover:bg-gray-800 rounded hover:opacity-100 transition-opacity text-left",
                    snippetPathId === largestVisibleSnippetId
                      ? "bg-gray-800 opacity-70"
                      : "opacity-50",
                  ]}
                  onclick={() => scrollToElement(snippetPathId)}
                >
                  {snippet.title}
                </button>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </nav>
</aside>
