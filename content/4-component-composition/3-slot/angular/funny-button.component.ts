import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./funny-button.component.css"],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
})
export class FunnyButtonComponent {}
