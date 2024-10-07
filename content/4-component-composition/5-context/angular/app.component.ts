import { Component, NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { UserProfileModule } from "./user-profile.component";

@Component({
  providers: [UserService],
  selector: "app-root",
  template: `
    <h1>Welcome back, {{ userService.user.username }}</h1>
    <app-user-profile />
  `,
})
export class AppComponent {
  constructor(public userService: UserService) {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [UserProfileModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
