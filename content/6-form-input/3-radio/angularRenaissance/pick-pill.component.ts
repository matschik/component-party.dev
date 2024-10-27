import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: "app-pick-pill",
  template: `
    <div>Picked: {{ picked() }}</div>

    <input id="blue-pill" type="radio" value="blue" [(ngModel)]="picked" />
    <label for="blue-pill">Blue pill</label>

    <input id="red-pill" type="radio" value="red" [(ngModel)]="picked" />
    <label for="red-pill">Red pill</label>
  `,
})
export class PickPillComponent {
  picked = signal("red");
}
