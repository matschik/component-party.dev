import { Component, output } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-answer-button",
  template: `
    <button (click)="yes.emit()">YES</button>
    <button (click)="no.emit()">NO</button>
  `,
})
export class AnswerButtonComponent {
  yes = output();
  no = output();
}
