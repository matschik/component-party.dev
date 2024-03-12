import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from '@ember/modifier';
import { eq } from 'ember-truth-helpers';

export default class PickPill extends Component {
  @tracked picked = "red";

  handleChange = (event) => (this.picked = event.target.value);

  <template>
    <div>Picked: {{this.picked}}</div>

    <input
      id="blue-pill"
      type="radio"
      value="blue"
      checked={{eq this.picked "blue"}}
      {{on "change" this.handleChange}}
    />
    <label htmlFor="blue-pill">Blue pill</label>

    <input
      id="red-pill"
      type="radio"
      value="red"
      checked={{eq this.picked "red"}}
      {{on "change" this.handleChange}}
    />
    <label htmlFor="red-pill">Red pill</label>
  </template>
}
