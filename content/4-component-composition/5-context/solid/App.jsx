import { createSignal } from "solid-js";

import { UserContext } from "./UserContext";
import UserProfile from "./UserProfile";

export default function App() {
  // In a real app, you would fetch the user data from an API
  const [user, setUser] = createSignal({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  function updateUsername(newUsername) {
    setUser({ ...user(), username: newUsername });
  }

  return (
    <>
      <h1>Welcome back, {user().username}</h1>
      <UserContext.Provider value={[user, updateUsername]}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}
