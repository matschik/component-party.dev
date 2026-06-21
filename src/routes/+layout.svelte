<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { WEBAPP_JSONLD } from "$lib/seo";
  let { children } = $props();
</script>

<svelte:head>
  <!-- static WebApplication JSON-LD ported verbatim from old index.html -->
  {@html `<script type="application/ld+json">${JSON.stringify(WEBAPP_JSONLD)}<\/script>`}
</svelte:head>

<Header />
{@render children()}
<Footer />
