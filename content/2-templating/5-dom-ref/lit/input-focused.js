import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";

@customElement("input-focused")
export class InputFocused extends LitElement {
  inputRef = createRef();

  firstUpdated() {
    this.inputRef.value.focus();
  }

  render() {
    return html`<input type="text" ${ref(this.inputRef)} />`;
  }
}
