import { ref } from 'vue';

export default function useFetchUsers() {
	const data = ref(null);
	const error = ref(null);
	const isLoading = ref(null);

	async function fetchData() {
		isLoading.value = true;
		try {
			const response = await fetch('https://randomuser.me/api/?results=3');
			const { results: users } = await response.json();
			data.value = users;
			error.value = null;
		} catch (err) {
			data.value = null;
			error.value = err;
		}
		isLoading.value = false;
	}
	fetchData();

	return { isLoading, error, data };
}
