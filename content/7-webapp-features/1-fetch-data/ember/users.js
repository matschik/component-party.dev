import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class UsersRoute extends Route {
	model = async () => {
		try {
			const response = await fetch('https://randomuser.me/api/?results=3');
			if (!response.ok) {
				if (response.status == 401) {
					throw new Error('Please try again');
				}
				throw new Error('Oops, We ran into a problem!');
			}
			return await response.json();
		} catch (error) {
			console.error(error);
		}
	};
}
