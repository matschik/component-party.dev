<script>
  import { onMount } from 'svelte';

  let pageTitle = $state("");
  onMount(() => {
    pageTitle = document.title;
  });
</script>

<p>Page title: {pageTitle}</p>
