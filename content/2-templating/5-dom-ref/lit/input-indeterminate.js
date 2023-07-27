import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";

@customElement("input-indeterminate")
export class InputIndeterminate extends LitElement {
  inputRef = createRef();

  firstUpdated() {
    this.inputRef.value.indeterminate = true;
  }

  render() {
    return html`<input type="checkbox" ${ref(this.inputRef)} />`;
  }
}
