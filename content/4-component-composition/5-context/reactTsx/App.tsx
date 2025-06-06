import { useState } from "react";
import { UserContext, User } from "./UserContext";
import UserProfile from "./UserProfile";

export default function App() {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    age: 30,
  });

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}
