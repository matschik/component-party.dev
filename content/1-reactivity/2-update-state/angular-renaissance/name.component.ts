import { Component, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-name",
  template: `<h1>Hello {{ name() }}</h1>`,
})
export class NameComponent {
  name = signal("John");

  constructor() {
    this.name.set("Jane");
  }
}
