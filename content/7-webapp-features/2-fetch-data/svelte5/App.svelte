<script>
  async function fetchUsers() {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const { results: users } = await response.json();
    return users;
  }
</script>

{#await fetchUsers()}
  <p>Fetching users...</p>
{:then users}
  <ul>
    {#each users as { picture, name }}
      <li>
        <img src={picture.thumbnail} alt="user" />
        <p>
          {name.first}
          {name.last}
        </p>
      </li>
    {/each}
  </ul>
{:catch}
  <p>An error occurred while fetching users</p>
{/await}
