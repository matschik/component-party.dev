import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-is-available",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input id="is-available" type="checkbox" [(ngModel)]="isAvailable" />
    <label for="is-available">Is available</label>
  `,
})
export class IsAvailableComponent {
  isAvailable = false;
}
