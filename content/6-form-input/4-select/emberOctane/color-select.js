import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ColorSelect extends Component {
  @tracked selectedColorId = 2;

  select = (event) => (this.selectedColorId = event.target.value);

  colors = [
    { id: 1, text: "red" },
    { id: 2, text: "blue" },
    { id: 3, text: "green" },
    { id: 4, text: "gray", isDisabled: true },
  ];
}
