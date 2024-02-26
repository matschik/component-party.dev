import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from '@ember/modifier';
import eq from 'ember-truth-helpers/helpers/eq';

export default class ColorSelect extends Component {
  @tracked selectedColorId = 2;

  select = (event) => (this.selectedColorId = event.target.value);

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
          selected={{eq color.id this.selectedColorId}}
        >
          {{color.text}}
        </option>
      {{/each}}
    </select>
  </template>
}
