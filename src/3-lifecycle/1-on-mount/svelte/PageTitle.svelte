<script>
	import { onMount } from 'svelte';
	let pageTitle = '';
	onMount(() => {
		pageTitle = document.title;
	});
</script>

<p>Page title is: {pageTitle}</p>
