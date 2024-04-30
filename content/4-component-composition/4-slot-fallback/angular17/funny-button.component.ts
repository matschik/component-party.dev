import { Component } from "@angular/core";

/**
 * WARNING
 * The `ng-content` fallback content will be availabe in Angular 18+.
 */
@Component({
  selector: "app-funny-button",
  styleUrls: ["./funny-button.component.css"],
  template: `
    <button>
      <ng-content>
        <span>No content found</span>
      </ng-content>
    </button>
  `,
})
export class FunnyButtonComponent {}
