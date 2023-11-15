<script>
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import createUserState from "./createUserState.svelte.js";

  // In a real app, you would fetch the user data from an API
  const user = createUserState({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  setContext("user", user);
</script>

<h1>Welcome back, {user.username}</h1>
<UserProfile />
