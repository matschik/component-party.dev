<script>
  import useFetchUsers from "./useFetchUsers.svelte.js";

  const result = useFetchUsers()
  const {isLoading, error, users} = $derived(result);
</script>

{#if isLoading}
  <p>Fetching users...</p>
{:else if error}
  <p>An error occurred while fetching users</p>
{:else if users}
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
{/if}
