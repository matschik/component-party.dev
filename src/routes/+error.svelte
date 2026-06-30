<script lang="ts">
  import { page } from "$app/state";
  import { createComparisonPath } from "$lib/frameworkUrl";
  import { matchFrameworkId } from "@frameworks";

  const POPULAR: [string, string][] = [
    ["react", "vue3"],
    ["react", "svelte5"],
    ["vue3", "svelte5"],
    ["react", "angularRenaissance"],
  ];
  const popular = POPULAR.map(([a, b]) => ({
    href: createComparisonPath(a, b),
    label: `${matchFrameworkId(a)?.title} vs ${matchFrameworkId(b)?.title}`,
  }));

  const is404 = $derived(page.status === 404);
  const heading = $derived(is404 ? "Page not found" : "Something went wrong");
  const detail = $derived(
    is404
      ? "This page doesn’t exist — but plenty of framework comparisons do."
      : page.error?.message || "An unexpected error occurred.",
  );
</script>

<svelte:head>
  <title>{page.status} · Component Party</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main
  class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20"
  data-testid="error-page"
>
  <img src="/popper.svg" alt="" class="size-12 mb-6" />
  <p class="text-7xl font-bold tracking-tight" data-testid="error-status">{page.status}</p>
  <h1 class="mt-3 text-2xl font-semibold">{heading}</h1>
  <p class="mt-3 max-w-md text-gray-400">{detail}</p>

  <a
    href="/"
    class="mt-8 rounded-md border border-blue-900 bg-gray-900 px-5 py-2.5 font-medium transition-all hover:bg-gray-800"
  >
    Back to comparisons
  </a>

  {#if is404}
    <div class="mt-10">
      <p class="mb-3 text-sm uppercase tracking-wide text-gray-500">Popular comparisons</p>
      <div class="flex flex-wrap justify-center gap-2">
        {#each popular as p (p.href)}
          <a
            href={p.href}
            class="rounded border border-gray-700 px-3 py-1 text-sm opacity-80 transition-all hover:bg-gray-800 hover:opacity-100"
          >
            {p.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</main>
