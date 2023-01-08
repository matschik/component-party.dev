import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
  const { username, email, updateEmail } = useContext(UserContext);

  return (
    <div>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <button onClick={() => updateEmail("unicorn42@example.com")}>
        Update Email to unicorn42@example.com
      </button>
    </div>
  );
}
