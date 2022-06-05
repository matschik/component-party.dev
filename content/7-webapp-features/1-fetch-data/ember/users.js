import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
	async model() {
		let users, error;
		let isLoading = true;
		try {
			const response = await fetch('https://randomuser.me/api/?results=3');
			users = await response.json();
			isLoading = false;
		} catch (err) {
			error = err;
			isLoading = false;
		}
		return { isLoading, users, error };
	}
}
