import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>{{ title }} app is running!</h1>`,
})
export class AppComponent {
  title = "Component Party";

  constructor() {}
}
