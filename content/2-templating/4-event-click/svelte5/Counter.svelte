<script>
  let count = $state(0);

  function incrementCount() {
    count++;
  }
</script>

<p>Counter: {count}</p>
<button onclick={incrementCount}>+1</button>
