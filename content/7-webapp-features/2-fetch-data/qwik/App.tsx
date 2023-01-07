import { component$, useResource$, Resource } from "@builder.io/qwik";

type UsersResponse = {
  results: {
    picture: {
      thumbnail: string;
    };
    name: {
      first: string;
      last: string;
    };
  }[];
};

export async function fetchUsers() {
  return (await fetch("https://randomuser.me/api/?results=3")).json();
}

export const App = component$(() => {
  const data = useResource$<UsersResponse>(fetchUsers);

  return (
    <Resource
      value={data}
      onPending={() => <p>Fetching users...</p>}
      onRejected={() => <p>An error occurred while fetching users</p>}
      onResolved={({ results: users }) => (
        <ul>
          {users.map((user) => (
            <li>
              <img src={user.picture.thumbnail} alt="user" />
              <p>
                {user.name.first} {user.name.last}
              </p>
            </li>
          ))}
        </ul>
      )}
    />
  );
});
