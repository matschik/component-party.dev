<script>
	async function fetchUsers() {
		return (await fetch('https://randomuser.me/api/?results=3')).json();
	}

	let promise = fetchUsers();
</script>

{#await promise}
	<p>Fetching users...</p>
{:then { results: users }}
	<ul>
		{#each users as user}
			<li>
				<img src={user.picture.thumbnail} alt="user" />
				<p>
					{user.name.first}
					{user.name.last}
				</p>
			</li>
		{/each}
	</ul>
{:catch error}
	<p>An error occured while fetching users</p>
{/await}
