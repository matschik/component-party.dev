import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-profile",
  template: `
    <div>
      <h2>My Profile</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <button (click)="updateUsername('Jane')">Update username to Jane</button>
    </div>
  `,
})
export default class MyUserProfileComponent {
  @Input() user;
  @Input() updateUsername;
}
