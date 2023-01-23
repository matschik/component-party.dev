export class InputIndeterminate {
  inputElement: HTMLInputElement;

  attached() {
    this.inputElement.indeterminate = true;
  }
}
