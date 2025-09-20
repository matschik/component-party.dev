<script lang="ts">
  import { onMount } from "svelte";
  import createLocaleStorage from "../lib/createLocaleStorage";

  interface StarCountStorageData {
    value: number;
    fetchedAt: number;
  }

  interface GitHubApiResponse {
    stargazers_count?: number;
  }

  const REPOSITORY_PATH = "matschik/component-party.dev";
  const STAR_COUNT_EXPIRES_IN_MS = 1000 * 60 * 2;

  const starCountStorage = createLocaleStorage("github-star-count");

  let starCount: number = $state(0);
  let isFetchingStarCount: boolean = $state(false);

  async function getRepoStarCount(): Promise<void> {
    const starCountStorageData: StarCountStorageData | null =
      starCountStorage.getJSON() as StarCountStorageData | null;

    // Skip API request in development mode
    if (import.meta.env.DEV) {
      if (starCountStorageData) {
        starCount = starCountStorageData.value;
      }
      return;
    }

    // Skip API request if there's no value in local storage
    if (!starCountStorageData) {
      return;
    }

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

    // Github public API rate limit: 60 requests per hour
    const data: GitHubApiResponse = await fetch(
      `https://api.github.com/repos/${REPOSITORY_PATH}`,
      {
        headers: {
          Accept: "application/vnd.github.v3.star+json",
          Authorization: "",
        },
      },
    )
      .finally(() => {
        isFetchingStarCount = false;
      })
      .then((r) => r.json());

    if (data.stargazers_count) {
      starCount = data.stargazers_count;
      starCountStorage.setJSON({
        value: starCount,
        fetchedAt: Date.now(),
      });
    }
  }

  onMount(() => {
    getRepoStarCount();
  });

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
  {#if isFetchingStarCount || starCount !== 0}
    <div
      class="hidden h-full items-center justify-center px-3 sm:flex border-[#373b43] sm:border-l"
    >
      {#if isFetchingStarCount && starCount === 0}
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
