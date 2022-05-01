<script>
	import c from 'classnames';
	import FRAMEWORKS from '../frameworks';
</script>

{#each FRAMEWORKS as framework}
	<button class="text-sm rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2" title={`Display ${framework.title}`}>
		<div class="flex items-center space-x-1">
			{#if framework?.img}
				<img src={framework.img} alt={framework.id} width={20} height={20} class="inline mr-[5px] mb-0 mt-0" />
			{/if}
			<span>{framework.title}</span>
		</div>
	</button>
{/each}
