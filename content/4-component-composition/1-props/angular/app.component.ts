import { Component, NgModule } from "@angular/core";
import { UserprofileModule } from "./userprofile.component";

@Component({
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

@NgModule({
  declarations: [AppComponent],
  imports: [UserprofileModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
