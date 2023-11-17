import useFetchUsers from "./useFetchUsers";

export default function App() {
  const { isLoading, error, data: users } = useFetchUsers();

  return (
    <>
      {isLoading ? (
        <p>Fetching users...</p>
      ) : error ? (
        <p>An error occurred while fetching users</p>
      ) : (
        users && (
          <ul>
            {users.map((user) => (
              <li key={user.login.uuid}>
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}
