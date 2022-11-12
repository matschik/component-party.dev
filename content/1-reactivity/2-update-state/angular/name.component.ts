import { Component } from "@angular/core";

@Component({
  selector: "app-name",
  template: `<h1>Hello {{ name }}</h1>`,
})
export class NameComponent {
  name = "John";

  constructor() {
    this.name = "Jane";
  }
}
