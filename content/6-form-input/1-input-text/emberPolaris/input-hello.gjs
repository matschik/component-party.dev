import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from '@ember/modifier';

export default class InputHello extends Component {
  @tracked text = "Hello World";

  handleInput = (event) => (this.text = event.target.value);

  <template>
    <p>{{this.text}}</p>
    <input value={{this.text}} {{on "input" this.handleInput}} />
  </template>
}
