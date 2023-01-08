import { useState, createContext } from "react";
import UserProfile from "./UserProfile";

const UserContext = createContext();

export default function App() {
  // In a real app, you would fetch the user data from an API
  const [user, setUser] = useState({
    username: "unicorn42",
    email: "john@example.com",
  });

  function updateEmail(newEmail) {
    setUser((userData) => ({ ...userData, email: newEmail }));
  }

  return (
    <UserContext.Provider value={{ ...user, updateEmail }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
