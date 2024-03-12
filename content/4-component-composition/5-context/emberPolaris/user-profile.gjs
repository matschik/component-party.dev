import Component from "@glimmer/component";
import { service } from "@ember/service";
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

export default class UserProfileComponent extends Component {
  @service userService;

  get user() {
    return this.userService.user;
  }

  <template>
    <div>
      <h2>My Profile</h2>
      <p>Username: {{this.user.username}}</p>
      <p>Email: {{this.user.email}}</p>
      <button {{on "click" (fn this.userService.updateUserName "Jane")}}>
        Update username to Jane
      </button>
    </div>
  </template>
}


