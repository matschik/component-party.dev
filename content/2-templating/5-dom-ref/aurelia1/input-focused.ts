export class InputFocused {
  inputElement: HTMLInputElement;

  attached() {
    this.inputElement.focus();
  }
}
