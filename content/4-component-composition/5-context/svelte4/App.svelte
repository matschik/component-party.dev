<script>
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import createUserStore from "./createUserStore.js";

  // In a real app, you would fetch the user data from an API
  const userStore = createUserStore({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  setContext("user", userStore);
</script>

<h1>Welcome back, {$userStore.username}</h1>
<UserProfile />
