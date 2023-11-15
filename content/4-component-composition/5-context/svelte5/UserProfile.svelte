<script>
  import { getContext } from "svelte";

  const user = getContext("user");
</script>

<div>
  <h2>My Profile</h2>
  <p>Username: {user.username}</p>
  <p>Email: {user.email}</p>
  <button onclick={() => (user.username = "Jane")}>
    Update username to Jane
  </button>
</div>
