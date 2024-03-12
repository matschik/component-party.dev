import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class UserServiceService extends Service {
  @tracked id = 1;
  @tracked username = "unicorn42";
  @tracked email = "unicorn42@example.com";

  get user() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
    };
  }

  @action
  updateUserName(newUsername) {
    this.username = newUsername;
  }
}
