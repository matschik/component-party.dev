<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL, createComparisonPath } from "$lib/frameworkUrl";
  let { data } = $props();
  const canonical = $derived(
    `${BASE_URL}${createComparisonPath(data.frameworkIds[0], data.frameworkIds[1])}`,
  );
  const title = $derived(`${data.titleA} vs ${data.titleB} - Component Party`);
  const description = $derived(
    `Compare ${data.titleA} vs ${data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${data.titleA} and ${data.titleB}.`,
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={false}
/>
