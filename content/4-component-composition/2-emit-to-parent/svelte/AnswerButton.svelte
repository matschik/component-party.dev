<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('yes')}> YES </button>

<button on:click={() => dispatch('no')}> NO </button>
