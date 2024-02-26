import Component from "@glimmer/component";
import { modifier } from "ember-modifier";

export default class InputFocused extends Component {
  autofocus = modifier((element) => element.focus());

  <template>
    <input {{this.autofocus}} />
  </template>
}