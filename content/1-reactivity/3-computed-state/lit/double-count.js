import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("double-count")
export class DoubleCount extends LitElement {
  @state()
  count = 10;

  render() {
    const doubleCount = this.count * 2;
    return html`<div>${doubleCount}</div>`;
  }
}
