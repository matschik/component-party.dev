<script>
  let time = $state(new Date().toLocaleTimeString());

  $effect(() => {
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });
</script>

<p>Current time: {time}</p>
