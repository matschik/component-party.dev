<script lang="ts">
  import { page } from "$app/state";
  import GithubStarButton from "./GithubStarButton.svelte";

  // A comparison page carries its own <h1> ("React vs Vue 3"); the site name
  // is the page heading everywhere else.
  const isComparison = $derived(page.route.id === "/compare/[comparison]");
</script>

<header class="backdrop-blur bg-gray-900/80 border-b border-gray-700">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <a class="font-semibold text-lg flex items-center space-x-3" href="/">
        <img src="/popper.svg" alt="logo" class="size-5" />
        {#if isComparison}
          <span>Component Party</span>
        {:else}
          <h1>Component Party</h1>
        {/if}
      </a>

      <div class="flex items-center space-x-4">
        <GithubStarButton />
      </div>
    </div>
  </div>
</header>
