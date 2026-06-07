import { useFetchUsers } from "./useFetchUsers.tsrx";

export function App() {
  const data = useFetchUsers();

  return <>
    if (data.isLoading) {
      <p>"Fetching users..."</p>
    } else if (data.error) {
      <p>"An error occurred while fetching users"</p>
    } else if (data.users) {
      <ul>
        for (const user of data.users; key user.login.uuid) {
          <li>
            <img src={user.picture.thumbnail} alt="user" />
            <p>{user.name.first}" "{user.name.last}</p>
          </li>
        }
      </ul>
    }
  </>;
}
