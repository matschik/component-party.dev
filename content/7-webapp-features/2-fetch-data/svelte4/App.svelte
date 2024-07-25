<script>
  let usersPromise = fetchUsers();

  async function fetchUsers() {
    const response = await fetch("https://randomuser.me/api/?results=3");
    return await response.json();
  }
</script>

{#await usersPromise}
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
{:catch}
  <p>An error occurred while fetching users</p>
{/await}
