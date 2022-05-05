<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function clickYes() {
		dispatch('yes');
	}

	function clickNo() {
		dispatch('no');
	}
</script>

<button on:click={clickYes}> YES </button>

<button on:click={clickNo}> NO </button>
