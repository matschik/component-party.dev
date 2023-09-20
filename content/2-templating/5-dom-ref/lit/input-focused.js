import { LitElement, html } from "lit";
import { customElement, state, query } from "lit/decorators.js";

@customElement("input-focused")
export class InputFocused extends LitElement {
  @query("input") inputEl;

  firstUpdated() {
    this.inputEl.focus();
  }

  render() {
    return html`<input type="text" />`;
  }
}
