<script>
  let { onYes, onNo } = $props()

  function clickYes() {
    onYes()
  }

  function clickNo() {
    onNo()
  }
</script>

<button onclick={clickYes}> YES </button>

<button onclick={clickNo}> NO </button>
