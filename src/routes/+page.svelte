<script lang="ts">
  import Comparison from "#lib/components/Comparison.svelte";
  import { BASE_URL } from "#lib/frameworkUrl.ts";
  import { webApplicationJsonLd } from "#lib/seo.ts";
  import { BUILD_DATE } from "#lib/buildDate.ts";
  let { data } = $props();
  const webAppLd = webApplicationJsonLd(BUILD_DATE);
  // The brand alone matches no search: the title also says what the site does.
  const title = "Component Party – Compare JavaScript Frameworks Side by Side";
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="description"
    content="Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks."
  />
  <link rel="canonical" href={`${BASE_URL}/`} />
  <meta property="og:url" content={`${BASE_URL}/`} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={`${BASE_URL}/banner2.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="twitter:image" content={`${BASE_URL}/banner2.png`} />
  {@html `<script type="application/ld+json">${JSON.stringify(webAppLd)}<\/script>`}
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={true}
/>
