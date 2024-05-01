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
    let shareURL = `${location.origin}`;
    if (frameworksSelected.length === 2) {
      shareURL += `/compare/${[...frameworksSelected].map((f) => f.id).join("-vs-")}`;
    } else {
      shareURL += `?f=${[...frameworksSelected].map((f) => f.id).join(",")}`;
    }
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
            class="flex items-center space-x-2 rounded border border-gray-700 border-opacity-50 bg-gray-900 px-3 py-1 text-sm text-white transition-all hover:bg-gray-800"
            aria-label="Copy framework selection link"
            on:click={copyShareLink}
          >
            <LinkIcon class="size-[1.3rem] sm:size-[1.1rem]" />
            <span class="hidden sm:inline">Share</span>
          </button>
        {/if}
        <GithubStarButton />
      </div>
    </div>
  </div>
</header>
