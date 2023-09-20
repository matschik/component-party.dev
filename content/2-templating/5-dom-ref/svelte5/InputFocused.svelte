<script>
  let inputElement;

  $effect(() => {
    inputElement.focus();
  });
</script>

<input bind:this={inputElement} />
