import { View } from "@dlightjs/dlight";

@View
class InputFocused {
  inputElement;
  didMount() {
    this.inputElement.focus();
  }

  Body() {
    input().type("text").element(this.inputElement);
  }
}

export default InputFocused;
