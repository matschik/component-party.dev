import { UserContext } from "./UserContext.tsrx";

export function UserProfile() {
  const user = UserContext.get();

  return <>
    <h2>"My Profile"</h2>
    <p>"Username: "{user.username}</p>
    <p>"Email: "{user.email}</p>
    <button onClick={() => (user.username = "Jane")}>
      "Update username to Jane"
    </button>
  </>;
}
