import { component$, useContext } from "@builder.io/qwik";
import { UserContext } from "./App";

const UserProfile = component$(() => {
  const { user, updateUsername } = useContext(UserContext);

  return (
    <div>
      <h2>My Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick$={() => updateUsername("Jane")}>
        Update username to Jane
      </button>
    </div>
  );
});

export default UserProfile;
