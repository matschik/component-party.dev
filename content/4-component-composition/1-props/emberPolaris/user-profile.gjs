import Component from "@glimmer/component";

export default class UserProfile extends Component {
  get formattedColors() {
    return this.args.favouriteColors.join(", ");
  }

  <template>
    <p>My name is {{@name}}!</p>
    <p>My age is {{@age}}!</p>
    <p>My favourite colors are {{this.formattedColors}}!</p>
    <p>I am {{if @isAvailable "available" "not available"}}</p>
  </template>
}
