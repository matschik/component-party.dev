<script>
  import { onMount } from "svelte";

  let inputElement;

  onMount(() => {
    inputElement.indeterminate = true;
  });
</script>

<input bind:this={inputElement} type="checkbox" />
