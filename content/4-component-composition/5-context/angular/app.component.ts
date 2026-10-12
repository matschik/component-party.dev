import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public user = {
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  };
  public updateUsername = (name) => {
    this.user.username = name;
  };
}
