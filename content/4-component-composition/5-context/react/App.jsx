import { useState } from "react";
import UserProfile from "./UserProfile";
import { UserContext } from "./UserContext";

export default function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  function updateUsername(newUsername) {
    setUser((userData) => ({ ...userData, username: newUsername }));
  }

  return (
    <>
      <h1>Welcome back, {user.username}</h1>
      <UserContext.Provider value={{ ...user, updateUsername }}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}
