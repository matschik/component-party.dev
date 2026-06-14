import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  template: `
    @if (userService.usersResource.isLoading()) {
      <div>Fetching users...</div>
    } @else if (userService.usersResource.error()) {
      <p>An error occurred while fetching users</p>
    } @else {
      <ul>
        @for (
          user of userService.usersResource.value()?.results ?? [];
          track user
        ) {
          <li>
            <img [src]="user.picture.thumbnail" alt="user" />
            <p>{{ user.name.first }} {{ user.name.last }}</p>
          </li>
        } @empty {
          <p>No users found</p>
        }
      </ul>
    }
  `,
})
export class UsersComponent {
  protected userService = inject(UserService);
}
