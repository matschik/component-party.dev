import { Component } from "@angular/core";

@Component({
  selector: "app-funny-button",
  styleUrls: ["./funny-button.component.css"],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
})
export class FunnyButtonComponent {}
