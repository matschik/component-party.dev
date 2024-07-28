import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

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

@Injectable({ providedIn: "root" })
export class UserService {
  private http = inject(HttpClient);

  #state = signal<UsersState>(initialState);
  state = this.#state.asReadonly();

  loadUsers() {
    this.#state.update((state) => ({ ...state, loading: true }));

    this.http
      .get<UserResponse>("https://randomuser.me/api/?results=3")
      .subscribe({
        next: ({ results }) =>
          this.#state.update((state) => ({ ...state, users: results })),
        error: (error) => this.#state.update((state) => ({ ...state, error })),
      });
  }
}

export interface UserResponse {
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
