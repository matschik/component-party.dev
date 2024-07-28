import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  user = {
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  };

  updateUsername(username: string) {
    this.user.username = username;
  }
}
