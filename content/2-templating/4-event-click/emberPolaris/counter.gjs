import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";

export default class Counter extends Component {
  @tracked count = 0;

  incrementCount = () => this.count++;

  <template>
    <p>Counter: {{this.count}}</p>
    <button {{on "click" this.incrementCount}}>+1</button>
  </template>
}
