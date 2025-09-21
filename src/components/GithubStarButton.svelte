<script lang="ts">
  import createLocaleStorage from "../lib/createLocaleStorage";

  interface StarCountStorageData {
    value: string;
    fetchedAt: number;
  }

  interface ShieldsApiResponse {
    schemaVersion: number;
    label: string;
    message: string;
    color: string;
  }

  const REPOSITORY_PATH = "matschik/component-party.dev";
  const STAR_COUNT_EXPIRES_IN_MS = 1000 * 60 * 5; // Shields.io caches for 5-15 minutes

  const starCountStorage = createLocaleStorage("github-star-count-v2", {
    value: "0",
    fetchedAt: 0,
  });

  let starCount: string = $state("0");
  let isFetchingStarCount: boolean = $state(false);

  async function getRepoStarCount(): Promise<void> {
    const starCountStorageData: StarCountStorageData | null =
      starCountStorage.getJSON() as StarCountStorageData | null;

    if (starCountStorageData) {
      starCount = starCountStorageData.value;
      if (
        starCountStorageData.fetchedAt >
        Date.now() - STAR_COUNT_EXPIRES_IN_MS
      ) {
        return;
      }
    }

    isFetchingStarCount = true;

    try {
      // Using Shields.io JSON endpoint - no rate limits, cached for 5-15 minutes
      const data: ShieldsApiResponse = await fetch(
        `https://img.shields.io/github/stars/${REPOSITORY_PATH}.json`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      )
        .finally(() => {
          isFetchingStarCount = false;
        })
        .then((r) => r.json());

      if (data.message) {
        // Use the formatted string directly from Shields.io (e.g., "3.1k", "500")
        starCount = data.message;
        starCountStorage.setJSON({
          value: starCount,
          fetchedAt: Date.now(),
        });
      }
    } catch (error) {
      console.warn("Failed to fetch star count from Shields.io:", error);
      // Keep the existing cached value if available
    }
  }

  getRepoStarCount();

  function onButtonClick(): void {
    starCountStorage.remove();
  }
</script>

<a
  class="bg-[#21262d] text-white border border-[#373b43] py-1 rounded flex items-center text-sm shadow-inner hover:opacity-90"
  href={`https://github.com/${REPOSITORY_PATH}`}
  target="_blank"
  aria-label={`Star ${REPOSITORY_PATH} on GitHub`}
  onclick={onButtonClick}
>
  <span class="flex items-center px-3 sm:space-x-2">
    <span
      class="iconify simple-icons--github size-[1.3rem] sm:size-[1.1rem]"
      aria-hidden="true"
    ></span>
    <span class="hidden sm:inline">Star</span>
  </span>
  {#if isFetchingStarCount || starCount !== "0"}
    <div
      class="hidden h-full items-center justify-center px-3 sm:flex border-[#373b43] sm:border-l"
    >
      {#if isFetchingStarCount && starCount === "0"}
        <span
          class="iconify ph--spinner animate-spin size-4 mx-1"
          aria-hidden="true"
        ></span>
      {:else}
        <span>{starCount}</span>
      {/if}
    </div>
  {/if}
</a>
