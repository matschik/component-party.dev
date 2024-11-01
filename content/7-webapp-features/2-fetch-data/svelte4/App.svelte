<script>
  import fetchUsers from "./fetchUsers";
</script>

{#await fetchUsers()}
  <p>Fetching users...</p>
{:then users}
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
  <p>An error {error} occurred while fetching users</p>
{/await}
