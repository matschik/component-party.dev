import { writable } from 'svelte/store';

export default function fetchUsers() {
	const data = writable();
	const isLoading = writable(false);
	const error = writable();

	async function fetchData() {
		try {
			const response = await fetch('https://randomuser.me/api/?results=3');
			const { results: users } = await response.json();
			data.set(users);
			error.set();
		} catch (err) {
			data.set();
			error.set(err);
		}
	}
	fetchData();

	return {
		data: {
			subscribe: data.subscribe,
		},
		error: {
			subscribe: error.subscribe,
		},
		isLoading: {
			subscribe: isLoading.subscribe,
		},
	};
}
