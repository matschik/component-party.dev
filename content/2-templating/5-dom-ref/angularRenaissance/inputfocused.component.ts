import { afterNextRender, Component, ElementRef, viewChild } from "@angular/core";

@Component({
  selector: "app-input-focused",
  template: `<input type="text" #inputRef />`,
})
export class InputFocusedComponent {
  inputRef = viewChild.required<ElementRef<HTMLInputElement>>("inputRef");

  constructor() {
    afterNextRender({ write: () => this.inputRef().nativeElement.focus() });
  }
}
