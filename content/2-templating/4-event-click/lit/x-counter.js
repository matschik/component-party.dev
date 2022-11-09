import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-counter")
export class XCounter extends LitElement {
  @state()
  count = 0;

  incrementCount() {
    this.count = this.count + 1;
  }

  render() {
    return html`
      <p>Counter: ${this.count}</p>
      <button @click=${this.incrementCount}>+1</button>
    `;
  }
}
