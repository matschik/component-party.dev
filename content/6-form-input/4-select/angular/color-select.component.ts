import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-color-select",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <select [(ngModel)]="selectedColorId">
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
}
