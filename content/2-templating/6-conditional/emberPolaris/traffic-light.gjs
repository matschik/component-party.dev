import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import { eq } from 'ember-truth-helpers';

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default class TrafficLight extends Component {
  @tracked lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight = () => {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  };

  <template>
    <button {{on "click" this.nextLight}}>Next light</button>
    <p>Light is: {{this.light}}</p>
    <p>
      You must
      {{#if (eq this.light "red")}}
        STOP
      {{else if (eq this.light "orange")}}
        SLOW DOWN
      {{else if (eq this.light "green")}}
        GO
      {{/if}}
    </p>
  </template>
}
