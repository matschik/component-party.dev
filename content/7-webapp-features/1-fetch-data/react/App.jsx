import useFetchUsers from './useFetchUsers';

export default function App() {
	const { isLoading, error, data: users } = useFetchUsers();

	return (
		<ul>
			{isLoading ? (
				<div>Fetching users...</div>
			) : error ? (
				<div>An error occured while fetching users</div>
			) : (
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
			)}
		</ul>
	);
}
