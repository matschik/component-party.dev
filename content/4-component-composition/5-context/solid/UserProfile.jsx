import { useContext } from 'solid-js'
import { UserContext } from './App'

export default function UserProfile() {
  const [user, setUser] = useContext(UserContext);
  const { username, email, updateUsername } = user;

  return (
    <div>
      <h2>My Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <button onClick={() => updateUsername("Jane")}>
        Update username to Jane
      </button>
    </div>
  );
}