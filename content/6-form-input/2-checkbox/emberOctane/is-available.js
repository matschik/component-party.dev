import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class InputHello extends Component {
  @tracked isAvailable = false;

  handleChange = (event) => (this.isAvailable = event.target.checked);
}
