import { Component } from "@angular/core";
import { FunnyButtonComponent } from "./funny-button.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [FunnyButtonComponent],
  template: `
    <app-funny-button />

    <app-funny-button>I got content!</app-funny-button>
  `,
})
export class AppComponent {}
