<script>
  import { getContext } from "svelte";

  const userStore = getContext("user");
</script>

<div>
  <h2>My Profile</h2>
  <p>Username: {$userStore.username}</p>
  <p>Email: {$userStore.email}</p>
  <button on:click={() => userStore.updateUsername("Jane")}>
    Update username to Jane
  </button>
</div>
