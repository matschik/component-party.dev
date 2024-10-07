import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: "app-color-select",
  template: `
    <select [(ngModel)]="selectedColorId">
      @for (let color of colors; track: color) {
        <option [value]="color.id" [disabled]="color.isDisabled">
          {{ color.text }}
        </option>
      }
    </select>
  `,
})
export class ColorSelectComponent {
  selectedColorId = signal(2);

  colors = [
    { id: 1, text: "red" },
    { id: 2, text: "blue" },
    { id: 3, text: "green" },
    { id: 4, text: "gray", isDisabled: true },
  ];
}
