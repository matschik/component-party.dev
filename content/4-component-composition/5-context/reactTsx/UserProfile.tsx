import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
