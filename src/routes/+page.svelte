<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL } from "$lib/frameworkUrl";
  let { data } = $props();
</script>

<svelte:head>
  <title>Component Party</title>
  <meta
    name="description"
    content="Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks."
  />
  <link rel="canonical" href={`${BASE_URL}/`} />
  <meta property="og:url" content={`${BASE_URL}/`} />
  <meta property="og:title" content="Component Party" />
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={true}
/>
