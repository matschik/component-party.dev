<script>
	let picked = 'red';
</script>

<div>Picked: {picked}</div>

<input id="blue-pill" bind:group={picked} type="radio" value="blue" />
<label for="blue-pill">Blue pill</label>

<input id="red-pill" bind:group={picked} type="radio" value="red" />
<label for="red-pill">Red pill</label>
