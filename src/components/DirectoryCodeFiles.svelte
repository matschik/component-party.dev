<script>
	export let files = [];
</script>

<div class="flex space-x-1 items-center ml-0">
	{#each files as file}
		<div class="bg-gray-800 py-1.5 px-3 text-xs rounded-t inline-block">
			{file.fileName}
		</div>
	{/each}
</div>
