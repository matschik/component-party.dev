<script>
  import { LinkIcon } from "heroiconsvelte/24/outline";
  import { notifications } from "@veljs/svelte/NotificationCenter.svelte";
  import GithubStarButton from "./GithubStarButton.svelte";
  import copyToClipboard from "../lib/copyToClipboard.js";

  export let frameworksSelected = [];

  function copyShareLink() {
    if (frameworksSelected.length === 0) {
      return;
    }
    const shareURL = `${location.origin}?f=${[...frameworksSelected].map((f) => f.id).join(",")}`;
    copyToClipboard(shareURL);
    notifications.show({
      title: `Framework selection link copied with ${[...frameworksSelected].map((f) => f.title).join(", ")}`,
    });
  }
</script>

<header class="backdrop-blur bg-gray-900/80 border-b border-gray-700">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <a class="font-semibold text-lg flex items-center space-x-3" href="/">
        <img src="/popper.svg" alt="logo" class="size-5" />
        <span>Component party</span>
      </a>

      <div class="flex items-center space-x-4">
        {#if frameworksSelected.length > 0}
          <button
            type="button"
            class="flex items-center space-x-2 rounded bg-gray-800 px-2 py-1 text-sm text-gray-200 shadow-sm hover:bg-white/15"
            aria-label="Copy framework selection link"
            on:click={copyShareLink}
          >
            <LinkIcon class="size-[1.3rem] sm:size-[1.1rem]" />
            <span class="mt-[2px] hidden sm:inline">Share</span>
          </button>
        {/if}
        <GithubStarButton />
      </div>
    </div>
  </div>
</header>
