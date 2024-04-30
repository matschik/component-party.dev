import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  providers: [UserService],
  template: `
    @switch (users.state()) {
      @case ("loading") {
        <p>Fetching users...</p>
      }
      @case ("error") {
        <p>{{ users.error ?? "An error occurred while fetching users" }}</p>
      }
      @case ("loaded") {
        @if (users.data().length > 0) {
          <ul>
            @for (user of users.data(); track user.id) {
              <li>
                <img src="{{ user.picture.thumbnail }}" alt="user" />
                <p>{{ user.name.first }} {{ user.name.last }}</p>
              </li>
            }
          </ul>
        } @else {
          <p>No users</p>
        }
      }
    }
  `,
})
export class UsersComponent {
  readonly users = inject(UserService);
}
