<script>
  import { onDestroy } from "svelte";

  let time = $state(new Date().toLocaleTimeString());

  onDestroy(() => {
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });
</script>

<p>Current time: {time}</p>
