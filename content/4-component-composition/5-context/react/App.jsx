import { useState, createContext } from "react";
import UserProfile from "./UserProfile";

export const UserContext = createContext();

export default function App() {
  // In a real app, you would fetch the user data from an API
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
