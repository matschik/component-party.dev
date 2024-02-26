import Component from "@glimmer/component";

export default class UserProfile extends Component {
  get formattedColors() {
    return this.args.favouriteColors.join(", ");
  }
}
