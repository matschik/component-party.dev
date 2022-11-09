import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("double-count")
export class DoubleCount extends LitElement {
  @state()
  count = 10;

  get doubleCount() {
    return this.count * 2;
  }

  render() {
    return html`<div>${this.doubleCount}</div>`;
  }
}
