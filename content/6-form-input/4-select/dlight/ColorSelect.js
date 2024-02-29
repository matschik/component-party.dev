import { View } from "@dlightjs/dlight";

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

@View
class ColorSelect {
  selectedColorId = 2;

  handleChange(event) {
    this.selectedColorId = event.target.value;
  }

  Body() {
    select().value(this.selectedColorId).onChange(this.handleChange);
    {
      for (const { id, text, isDisabled } of colors) {
        key: id;
        option(text).value(id).disabled(isDisabled);
      }
    }
  }
}

export default ColorSelect;
