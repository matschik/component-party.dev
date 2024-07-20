import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-color-select",
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

@NgModule({
  declarations: [ColorSelectComponent],
  imports: [FormsModule],
  exports: [ColorSelectComponent],
})
export class ColorSelectModule {}
