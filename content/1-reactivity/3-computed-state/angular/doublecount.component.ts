import { Component } from "@angular/core";

@Component({
  selector: "app-doublecount",
  template: `<div>{{ doubleCount }}</div>`,
})
export class DoublecountComponent {
  count = 10;

  get doubleCount() {
    return this.count * 2;
  }
}
