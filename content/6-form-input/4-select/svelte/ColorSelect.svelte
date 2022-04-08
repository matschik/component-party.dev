<script>
	let selectedColorId = 2;

	const colors = [
		{ id: 1, text: 'red' },
		{ id: 2, text: 'blue' },
		{ id: 3, text: 'green' },
		{ id: 4, text: 'gray', isDisabled: true },
	];
</script>

<select bind:value={selectedColorId}>
	{#each colors as color}
		<option value={color.id} disabled={color.isDisabled}>
			{color.text}
		</option>
	{/each}
</select>
