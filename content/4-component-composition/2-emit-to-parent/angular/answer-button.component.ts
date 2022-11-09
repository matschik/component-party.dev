import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-answer-button",
  template: `
    <button (click)="yes.emit()">YES</button>
    <button (click)="no.emit()">NO</button>
  `,
})
export class AnswerButtonComponent {
  @Output() yes = new EventEmitter<void>();
  @Output() no = new EventEmitter<void>();
}
