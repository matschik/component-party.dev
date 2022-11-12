import { Component } from "@angular/core";

@Component({
  selector: "app-input-hello",
  template: `<input [value]="text" (change)="handleInputChange($event)" />`,
})
export class InputHelloComponent {
  text = "";

  handleInputChange(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
  }
}
