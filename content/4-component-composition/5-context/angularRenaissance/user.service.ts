import { Injectable, signal } from "@angular/core";

@Injectable()
export class UserService {
  user = signal({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  updateUsername(username: string) {
    this.user.update((user) => ({ ...user, username }));
  }
}
