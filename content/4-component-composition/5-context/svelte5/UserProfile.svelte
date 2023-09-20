<script>
  import { getContext } from "svelte";

  const user = getContext("user");
</script>

<div>
  <h2>My Profile</h2>
  <p>Username: {user.value.username}</p>
  <p>Email: {user.value.email}</p>
  <button on:click={() => user.updateUsername("Jane")}>
    Update username to Jane
  </button>
</div>
