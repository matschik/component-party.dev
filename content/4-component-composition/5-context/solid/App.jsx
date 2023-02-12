import { createContext, createState, useState } from 'solid-js'
import UserProfile from './UserProfile'

const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  function updateUsername(newUsername) {
    setUser(userData => ({ ...userData, username: newUsername }));
  }

  return (
    <UserContext.Provider value={{ user, updateUsername }}>
      <>
        <h1>Welcome back, {user.username}</h1>
        <UserProfile />
      </>
    </UserContext.Provider>
  );
}