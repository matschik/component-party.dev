import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class InputHello extends Component {
  @tracked text = "Hello World";

  handleInput = (event) => (this.text = event.target.value);
}
