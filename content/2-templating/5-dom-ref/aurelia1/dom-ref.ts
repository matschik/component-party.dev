export class DomRef {
  inputElement: HTMLInputElement;

  attached() {
    this.inputElement.focus();
  }
}
