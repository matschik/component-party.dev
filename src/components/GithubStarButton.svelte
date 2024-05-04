<script>
  import { onMount } from "svelte";
  import createLocaleStorage from "../lib/createLocaleStorage";
  import GithubIcon from "./GithubIcon.svelte";

  const REPOSITORY_PATH = "matschik/component-party.dev";
  const DURATION_2_MIN = 1000 * 60 * 2;
  const STAR_COUNT_DURATION_EXPIRATION = DURATION_2_MIN;

  const starCountStorage = createLocaleStorage("github-star-count");

  let starCount = 0;
  let isFetchingStarCount = false;

  async function getRepoStarCount() {
    const starCountStorageData = starCountStorage.getJSON();
    if (starCountStorageData) {
      starCount = starCountStorageData.value;
      if (
        starCountStorageData.fetchedAt >
        Date.now() - STAR_COUNT_DURATION_EXPIRATION
      ) {
        return;
      }
    }

    isFetchingStarCount = true;

    // Github public API rate limit: 60 requests per hour
    const data = await fetch(
      `https://api.github.com/repos/${REPOSITORY_PATH}`,
      {
        headers: {
          Accept: "application/vnd.github.v3.star+json",
          Authorization: "",
        },
      }
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

  function onButtonClick() {
    starCountStorage.remove();
  }
</script>

<a
  class="bg-[#21262d] text-white border border-[#373b43] py-1 rounded flex items-center text-sm shadow-inner hover:opacity-90"
  href={`https://github.com/${REPOSITORY_PATH}`}
  target="_blank"
  aria-label={`Star ${REPOSITORY_PATH} on GitHub`}
  on:click={onButtonClick}
>
  <span
    class="flex items-center border-[#373b43] px-3 sm:space-x-2 sm:border-r"
  >
    <GithubIcon class="size-[1.3rem] sm:size-[1.1rem]" />
    <span class="hidden sm:inline">Star</span>
  </span>
  {#if isFetchingStarCount || starCount !== 0}
    <div class="hidden h-full items-center justify-center px-3 sm:flex">
      {#if isFetchingStarCount && starCount === 0}
        <svg
          class="animate-spin size-4 mx-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      {:else}
        <span>{starCount}</span>
      {/if}
    </div>
  {/if}
</a>
