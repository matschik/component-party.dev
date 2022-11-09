<script>
  import { onDestroy } from "svelte";

  let time = new Date().toLocaleTimeString();

  const timer = setInterval(() => {
    time = new Date().toLocaleTimeString();
  }, 1000);

  onDestroy(() => clearInterval(timer));
</script>

<p>Current time: {time}</p>
