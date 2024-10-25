import { Component, signal } from "@angular/core";
import { AnswerButtonComponent } from "./answer-button.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [AnswerButtonComponent],
  template: `
    <p>Are you happy?</p>

    <app-answer-button (yes)="onAnswerYes()" (no)="onAnswerNo()">
    </app-answer-button>

    <p style="font-size: 50px">{{ isHappy() ? "😀" : "😥" }}</p>
  `,
})
export class AppComponent {
  isHappy = signal(true);

  onAnswerYes() {
    this.isHappy.set(true);
  }

  onAnswerNo() {
    this.isHappy.set(false);
  }
}
