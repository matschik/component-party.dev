import { Component } from "@angular/core";

@Component({
  selector: "app-color-select",
  template: `
    <select [value]="selectedColorId" (change)="handleChange($event)">
      <option
        *ngFor="let color of colors"
        [value]="color.id"
        [disabled]="color.isDisabled"
      >
        {{ color.text }}
      </option>
    </select>
  `,
})
export class ColorSelectComponent {
  selectedColorId = 2;

  colors = [
    { id: 1, text: "red" },
    { id: 2, text: "blue" },
    { id: 3, text: "green" },
    { id: 4, text: "gray", isDisabled: true },
  ];

  handleChange(event) {
    this.selectedColorId = event.target.value;
  }
}
