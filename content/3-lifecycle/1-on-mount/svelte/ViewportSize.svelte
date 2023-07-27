<script>
  import { onMount } from "svelte";
  let viewportSize = "";
  onMount(() => {
    viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  });
</script>

<p>Viewport size: {viewportSize}</p>
