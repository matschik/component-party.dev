<script>
  let count = $state(10);
  const doubleCount = $derived(count * 2);
</script>

<div>{doubleCount}</div>
