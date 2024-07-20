import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-pick-pill",
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

@NgModule({
  declarations: [PickPillComponent],
  imports: [FormsModule],
  exports: [PickPillComponent],
})
export class PickPillModule {}
