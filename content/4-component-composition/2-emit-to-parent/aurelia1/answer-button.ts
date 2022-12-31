import { customElement, bindable } from "aurelia-templating";

@customElement("answer-button")
export class AnswerButton {
  @bindable actionHandler;

  clickYes() {
    this.actionHandler({ reply: "yes" });
  }

  clickNo() {
    this.actionHandler({ reply: "no" });
  }
}
