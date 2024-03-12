import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class PickPill extends Component {
  @tracked picked = "red";

  handleChange = (event) => (this.picked = event.target.value);
}
