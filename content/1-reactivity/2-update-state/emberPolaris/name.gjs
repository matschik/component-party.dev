import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class CounterComponent extends Component {
  @tracked name = "John";

  constructor(owner, args) {
    super(owner, args);

    this.name = "Jane";
  }

  <template>
    <h1>Hello {{this.name}}</h1>
  </template>
}
