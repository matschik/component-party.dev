import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("answer-button")
export class AnswerButton extends LitElement {
  clickYes() {
    this.dispatchEvent(new Event("yes"));
  }

  clickNo() {
    this.dispatchEvent(new Event("no"));
  }

  render() {
    return html`
      <button @click=${this.clickYes}>Yes</button>
      <button @click=${this.clickNo}>No</button>
    `;
  }
}
