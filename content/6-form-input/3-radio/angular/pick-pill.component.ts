import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-pick-pill",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>Picked: {{ picked }}</div>

    <input id="blue-pill" type="radio" value="blue" [(ngModel)]="picked" />
    <label for="blue-pill">Blue pill</label>

    <input id="red-pill" type="radio" value="red" [(ngModel)]="picked" />
    <label for="red-pill">Red pill</label>
  `,
})
export class PickPillComponent {
  picked = "red";
}
