import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-funny-button></app-funny-button>

    <app-funny-button>
      <ng-template #content>I got content!</ng-template>
    </app-funny-button>
  `,
})
export class AppComponent {}
