<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL, createComparisonPath } from "$lib/frameworkUrl";
  import { techArticleJsonLd } from "$lib/seo";
  import { BUILD_DATE } from "$lib/buildDate";
  let { data } = $props();
  const canonical = $derived(
    `${BASE_URL}${createComparisonPath(data.frameworkIds[0], data.frameworkIds[1])}`,
  );
  const ogImage = $derived(`${BASE_URL}/og/${data.frameworkIds[0]}-vs-${data.frameworkIds[1]}.png`);
  const title = $derived(`${data.titleA} vs ${data.titleB} - Component Party`);
  const description = $derived(
    `Compare ${data.titleA} vs ${data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${data.titleA} and ${data.titleB}.`,
  );
  const articleLd = $derived(
    techArticleJsonLd({
      titleA: data.titleA,
      titleB: data.titleB,
      description,
      url: canonical,
      image: ogImage,
      buildDate: BUILD_DATE,
    }),
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={ogImage} />
  {@html `<script type="application/ld+json">${JSON.stringify(articleLd)}<\/script>`}
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={false}
/>
