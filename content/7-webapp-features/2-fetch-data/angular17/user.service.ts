import { HttpClient, inject } from "@angular/common/http";
import { Injectable, computed } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { of } from "rxjs";
import { startWith, map, catchError } from "rxjs/operators";
import { UserResponse, UsersState, initialState } from "./user.model";

@Injectable()
export class UserService {
  #http = inject(HttpClient);
  #state$ = this.#http
    .get<UserResponse>("https://randomuser.me/api/?results=3")
    .pipe(
      startWith(initialState),
      map(({ results }) => ({ data: results, state: "loaded" }) as UsersState),
      catchError(() =>
        of({
          state: "error",
          data: [],
          error: "An error occurred while fetching users",
        } as UsersState)
      )
    );
  #state = toSignal<UsersState>(this.#state$);

  readonly state = computed(() => this.#state().state);
  readonly data = computed(() => this.#state().data);
  readonly error = computed(() => this.#state().error);
}
