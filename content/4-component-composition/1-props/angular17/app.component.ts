import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <app-userprofile
      name="John"
      [age]="20"
      [favouriteColors]="['green', 'blue', 'red']"
      [isAvailable]="true"
    >
    </app-userprofile>
  `,
})
export class AppComponent {}
