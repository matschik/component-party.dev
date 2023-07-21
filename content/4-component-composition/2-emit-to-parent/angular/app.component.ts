import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p>Are you happy?</p>

    <app-answer-button (yes)="onAnswerYes()" (no)="onAnswerNo()">
    </app-answer-button>

    <p style="font-size: 50px">{{ isHappy ? "😀" : "😥" }}</p>
  `,
})
export class AppComponent {
  isHappy = true;

  onAnswerYes() {
    this.isHappy = true;
  }

  onAnswerNo() {
    this.isHappy = false;
  }
}
