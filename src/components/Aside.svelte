<script lang="ts">
  import { sections, snippets } from "../generatedContent/tree.js";
  import { onMount } from "svelte";
  import throttle from "just-throttle";

  let largestVisibleSnippetId: string = $state("");

  function getLargestElement(elements: NodeListOf<Element>): Element | null {
    let largestArea = 0;
    let largestElement: Element | null = null;

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

  function listenLargestSnippetOnScroll(): () => void {
    function onScroll(): void {
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
  }

  let unlistenLargestSnippetOnScroll: (() => void) | undefined;

  onMount(() => {
    unlistenLargestSnippetOnScroll = listenLargestSnippetOnScroll();

    return () => unlistenLargestSnippetOnScroll?.();
  });
</script>

<aside
  class="no-scroll hidden lg:block sticky flex-shrink-0 w-[300px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"
>
  <nav class="w-full text-base py-2 pl-4 pb-20">
    <ul class="space-y-6">
      {#each sections as section (section.sectionId)}
        <li>
          <a
            href={`#${section.sectionId}`}
            class={[
              "inline-block w-full py-1.5 px-4 text-white font-semibold opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity",
              {
                "bg-gray-800":
                  largestVisibleSnippetId &&
                  largestVisibleSnippetId.startsWith(section.sectionId),
              },
            ]}
          >
            {section.title}
          </a>
          <ul>
            {#each snippets.filter((s: any) => s.sectionId === section.sectionId) as snippet (snippet.snippetId)}
              {@const snippetPathId =
                section.sectionId + "." + snippet.snippetId}
              <li>
                <a
                  href={`#${snippetPathId}`}
                  class={[
                    "inline-block w-full py-1.5 px-4 text-white font-medium hover:bg-gray-800 rounded hover:opacity-100 transition-opacity",
                    snippetPathId === largestVisibleSnippetId
                      ? "bg-gray-800 opacity-70"
                      : "opacity-50",
                  ]}
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
