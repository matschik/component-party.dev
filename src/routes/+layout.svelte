<script lang="ts">
  import "../app.css";
  import Header from "#lib/components/Header.svelte";
  import Footer from "#lib/components/Footer.svelte";
  let { children } = $props();
</script>

<div class="grid min-h-dvh grid-rows-[auto_1fr]">
  <Header />
  <div>
    {@render children()}
  </div>
</div>
<Footer />
