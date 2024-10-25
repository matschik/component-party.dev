import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  standalone: true,
  selector: "app-users",
  template: `
    @let vm = userService.state();

    @if (vm.loading) {
      <div>Fetching users...</div>
    } @else if (vm.error) {
      <p>An error occurred while fetching users</p>
    } @else {
      <ul>
        @for (user of vm.users; track user) {
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

  constructor() {
    this.userService.loadUsers();
  }
}
