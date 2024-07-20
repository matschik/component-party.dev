import { Component, NgModule } from "@angular/core";
import { AnswerButtonModule } from "./answer-button.component";

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

@NgModule({
  declarations: [AppComponent],
  imports: [AnswerButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
