import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: "app-is-available",
  template: `
    <input id="is-available" type="checkbox" [(ngModel)]="isAvailable" />
    <label for="is-available">Is available</label>
  `,
})
export class IsAvailableComponent {
  isAvailable = signal(false);
}
