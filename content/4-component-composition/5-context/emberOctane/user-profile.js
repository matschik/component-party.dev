import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class UserProfileComponent extends Component {
  @service userService;

  get user() {
    return this.userService.user;
  }
}
