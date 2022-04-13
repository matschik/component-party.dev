<script>
	import FRAMEWORKS from '../frameworks';
	export let id;

	$: framework = FRAMEWORKS.find((f) => f.id === id);
</script>

{#if framework.img}
	<img src={framework.img} alt={framework.id} width="20" height="20" class="inline mr-[5px] mb-0 mt-0" />
{/if}
<span>{framework.title}</span>
