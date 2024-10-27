import { Component } from "@angular/core";
import { FunnyButtonComponent } from "./funny-button.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [FunnyButtonComponent],
  template: `<app-funny-button>Click me!</app-funny-button>`,
})
export class AppComponent {}
