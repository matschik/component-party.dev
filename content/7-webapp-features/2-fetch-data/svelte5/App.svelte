<script>
  import useFetchUsers from "./useFetchUsers.svelte.js";

  const response = useFetchUsers();
</script>

{#if response.isLoading}
  <p>Fetching users...</p>
{:else if response.error}
  <p>An error occurred while fetching users</p>
{:else if response.users}
  <ul>
    {#each response.users as user}
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
