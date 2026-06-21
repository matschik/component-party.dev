<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>OG image gallery (dev)</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="mx-auto max-w-7xl p-6">
  <h1 class="mb-1 text-2xl font-bold">OG image gallery</h1>
  <p class="mb-6 text-sm text-gray-500">
    Dev-only preview of every comparison OG image ({data.items.length} pairs).
  </p>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.items as item (item.comparison)}
      <figure class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <a href={item.ogUrl} target="_blank" rel="noreferrer">
          <img
            src={item.ogUrl}
            alt={`OG image for ${item.label}`}
            loading="lazy"
            width="1200"
            height="630"
            class="block aspect-[1200/630] w-full bg-gray-50 dark:bg-gray-900"
          />
        </a>
        <figcaption class="px-3 py-2 text-sm">
          <div class="font-medium">{item.label}</div>
          <code class="text-xs text-gray-500">{item.comparison}</code>
        </figcaption>
      </figure>
    {/each}
  </div>
</main>
