import { createResource, Show, For } from 'solid-js';

async function fetchUsers() {
	return (await fetch('https://randomuser.me/api/?results=3')).json();
}

export default function Users() {
	const [data] = createResource(fetchUsers);
	const users = () => data()?.results;
	return (
		<Show when={users()}>
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
		</Show>
	);
}
