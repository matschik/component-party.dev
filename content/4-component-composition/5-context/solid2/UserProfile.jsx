import { useContext } from "solid-js";

import { UserContext } from "./UserContext";

export default function UserProfile() {
  const [user, updateUsername] = useContext(UserContext);

  return (
    <div>
      <h2>My Profile</h2>
      <p>Username: {user().username}</p>
      <p>Email: {user().email}</p>
      <button onClick={() => updateUsername("Jane")}>
        Update username to Jane
      </button>
    </div>
  );
}
