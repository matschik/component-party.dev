<script>
	import fetchUsers from './fetchUsers';

	const { data: users, isLoading, error } = fetchUsers();
</script>

{#if $isLoading}
	<div>Fetching users...</div>
{:else if $error}
	<div>An error occured while fetching users</div>
{:else if $users}
	<ul>
		{#each $users as user}
			<li>
				<img src={user.picture.thumbnail} alt="user" />
				<p>
					{user.name.first}
					{user.name.last}
				</p>
			</li>
		{/each}
	</ul>
{/if}
