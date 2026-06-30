import { Component, NgModule } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-user-profile",
  template: `
    <div>
      <h2>My Profile</h2>
      <p>Username: {{ userService.user.username }}</p>
      <p>Email: {{ userService.user.email }}</p>
      <button (click)="userService.updateUsername('Jane')">
        Update username to Jane
      </button>
    </div>
  `,
})
export class UserProfileComponent {
  constructor(public userService: UserService) {}
}

@NgModule({
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
