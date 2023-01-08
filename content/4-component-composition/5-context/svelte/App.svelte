<script>
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import createUserContext from "./createUserContext.js";

  // In a real app, you would fetch the user data from an API
  setContext(
    "user",
    createUserContext({
      username: "john",
      email: "john@example.com",
    })
  );
</script>

<UserProfile />
