import { createMemo, For, Loading, Errored } from "solid-js";

async function fetchUsers() {
  const response = await fetch("https://randomuser.me/api/?results=3");
  const { results } = await response.json();
  return results;
}

export default function App() {
  const users = createMemo(() => fetchUsers());

  return (
    <Errored fallback={<p>An error occurred while fetching users</p>}>
      <Loading fallback={<p>Fetching users...</p>}>
        <ul>
          <For each={users()}>
            {(user) => (
              <li>
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            )}
          </For>
        </ul>
      </Loading>
    </Errored>
  );
}
