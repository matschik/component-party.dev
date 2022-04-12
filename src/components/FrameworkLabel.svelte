<script>
	import FRAMEWORKS from '../frameworks';
	export let id;

	$: framework = FRAMEWORKS.find((f) => f.id === id);
</script>

{#if framework.img}
	<img src={framework.img} alt={framework.id} width="20" height="20" class="framework-logo" />
{/if}
<span>{framework.title}</span>

<style>
	.framework-logo {
		display: inline;
		margin-right: 5px;
		margin-bottom: 0px;
		margin-top: 0px;
	}
</style>
