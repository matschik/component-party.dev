import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class InputHello extends Component {
  @tracked isAvailable = false;

  handleChange = (event) => (this.isAvailable = event.target.checked);

  <template>
    <input
      id="is-available"
      type="checkbox"
      checked={{this.isAvailable}}
      {{on "change" this.handleChange}}
    />
    <label for="is-available">Is available</label>
  </template>
}
