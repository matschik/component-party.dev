import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <app-funny-button></app-funny-button>

    <app-funny-button>I got content!</app-funny-button>
  `,
})
export class AppComponent {}
