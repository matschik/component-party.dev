import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, take } from 'rxjs';

export interface UsersState {
	users: User[];
	error: string | null;
	loading: boolean;
}

export const initialState: UsersState = {
	users: [],
	error: null,
	loading: false,
};

@Injectable({ providedIn: 'root' })
export class UserService {
	private state = new BehaviorSubject<UsersState>(initialState);
	state$ = this.state.asObservable();

	constructor(private http: HttpClient) {}

	loadUsers() {
		this.state.next({ ...initialState, loading: true });

		this.http
			.get<UserRes>('https://randomuser.me/api/?results=3')
			.pipe(
				take(1),
				tap(({ results }) => this.state.next({ ...initialState, users: results })),
				catchError((error) => {
					this.state.next({ ...initialState, error });
					return error;
				})
			)
			.subscribe();
	}
}

export interface UserRes {
	results: User[];
	info: any;
}

export interface User {
	name: {
		title: string;
		first: string;
		last: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
}
