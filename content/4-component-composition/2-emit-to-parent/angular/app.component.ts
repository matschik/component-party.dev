import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p>Are you happy?</p>

    <app-answer-button (yes)="onAnswerYes()" (no)="onAnswerNo()">
    </app-answer-button>

    <p style="font-size: 50px">{{ canCome ? "😀" : "😥" }}</p>
  `,
})
export class AppComponent {
  canCome = true;

  onAnswerYes() {
    this.canCome = true;
  }

  onAnswerNo() {
    this.canCome = false;
  }
}
