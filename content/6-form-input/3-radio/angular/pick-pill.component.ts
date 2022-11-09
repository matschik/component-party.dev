import { Component } from "@angular/core";

@Component({
  selector: "app-pick-pill",
  template: `
    <div>Picked: {{ picked }}</div>

    <input
      id="blue-pill"
      [checked]="picked === 'blue'"
      type="radio"
      value="blue"
      (change)="handleChange($event)"
    />
    <label for="blue-pill">Blue pill</label>

    <input
      id="red-pill"
      [checked]="picked === 'red'"
      type="radio"
      value="red"
      (change)="handleChange($event)"
    />
    <label for="red-pill">Red pill</label>
  `,
})
export class PickPillComponent {
  picked = "red";

  handleChange(event) {
    this.picked = event.target.value;
  }
}
