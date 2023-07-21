import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "./answer-button";

@customElement("x-app")
export class XApp extends LitElement {
  @state()
  isHappy = true;

  onAnswerNo() {
    this.isHappy = false;
  }

  onAnswerYes() {
    this.isHappy = true;
  }

  render() {
    return html`
      <p>Are you happy?</p>
      <answer-button
        @yes=${this.onAnswerYes}
        @no=${this.onAnswerNo}
      ></answer-button>
      <p style="font-size: 50px;">${this.isHappy ? "😀" : "😥"}</p>
    `;
  }
}
