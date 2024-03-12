import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from '@ember/modifier';

export default class ColorSelect extends Component {
  @tracked selectedColorId = 2;

  select = (event) => (this.selectedColorId = event.target.value);

  isSelected = (colorId) => this.selectedColorId === colorId;

  colors = [
    { id: 1, text: "red" },
    { id: 2, text: "blue" },
    { id: 3, text: "green" },
    { id: 4, text: "gray", isDisabled: true },
  ];

  <template>
    <select {{on "change" this.select}}>
      {{#each this.colors as |color|}}
        <option
          value={{color.id}}
          disabled={{color.isDisabled}}
          selected={{this.isSelected color.id}}
        >
          {{color.text}}
        </option>
      {{/each}}
    </select>
  </template>
}
