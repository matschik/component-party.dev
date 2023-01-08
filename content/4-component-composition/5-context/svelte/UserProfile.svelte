<script>
  import { getContext } from "svelte";

  const userStore = getContext("user");
</script>

<div>
  <p>Username: {$userStore.username}</p>
  <p>Email: {$userStore.email}</p>
  <button on:click={() => userStore.updateEmail("unicorn42@example.com")}>
    Update Email to unicorn42@example.com
  </button>
</div>
