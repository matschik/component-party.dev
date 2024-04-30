import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-funny-button",
  styleUrls: ["./funny-button.component.css"],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
})
export class FunnyButtonComponent {}
