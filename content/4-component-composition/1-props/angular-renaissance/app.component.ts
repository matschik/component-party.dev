import { Component } from "@angular/core";
import { UserprofileComponent } from "./userprofile.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [UserprofileComponent],
  template: `
    <app-userprofile
      name="John"
      [age]="20"
      [favouriteColors]="['green', 'blue', 'red']"
      [isAvailable]="true"
    />
  `,
})
export class AppComponent {}
