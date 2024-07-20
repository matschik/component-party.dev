import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";
import { UserProfileComponent } from "./user-profile.component";

@Component({
  standalone: true,
  imports: [UserProfileComponent],
  providers: [UserService],
  selector: "app-root",
  template: `
    <h1>Welcome back, {{ userService.user().username }}</h1>
    <app-user-profile />
  `,
})
export class AppComponent {
  protected userService = inject(UserService);
}
