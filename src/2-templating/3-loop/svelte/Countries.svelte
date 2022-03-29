<script>
    const countries = [
		"France",
		"United States",
		"Spain"
	]
</script>

<ul>
    {#each countries as country}
        <li>{country}</li>
    {/each}
</ul>