import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-is-available",
  template: `
    <input id="is-available" type="checkbox" [(ngModel)]="isAvailable" />
    <label for="is-available">Is available</label>
  `,
})
export class IsAvailableComponent {
  isAvailable = false;
}

@NgModule({
  declarations: [IsAvailableComponent],
  imports: [FormsModule],
  exports: [IsAvailableComponent],
})
export class IsAvailableModule {}
