import { afterNextRender, Component, ElementRef, viewChild } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-inputfocused",
  template: `<input type="text" #inputRef />`,
})
export class InputfocusedComponent {
  inputRef = viewChild.required<ElementRef<HTMLInputElement>>("inputRef");

  constructor() {
    afterNextRender({ write: () => this.inputRef().nativeElement.focus() });
  }
}
