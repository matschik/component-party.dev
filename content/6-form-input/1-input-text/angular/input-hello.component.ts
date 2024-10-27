import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-input-hello",
  template: `
    <p>{{ text }}</p>
    <input [(ngModel)]="text" />
  `,
})
export class InputHelloComponent {
  text = "";
}

@NgModule({
  declarations: [InputHelloComponent],
  imports: [FormsModule],
  exports: [InputHelloComponent],
})
export class InputHelloModule {}
