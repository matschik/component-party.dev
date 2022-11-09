import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

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
  private state = new BehaviorSubject<UsersState>(initialState);
  state$ = this.state.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.state.next({ ...initialState, loading: true });

    this.http
      .get<UserResponse>("https://randomuser.me/api/?results=3")
      .subscribe({
        next: ({ results }) =>
          this.state.next({ ...initialState, users: results }),
        error: (error) => this.state.next({ ...initialState, error }),
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
