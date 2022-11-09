import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-time")
export class XTime extends LitElement {
  @state()
  time = "";

  timer;

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  render() {
    return html`<p>Current time: ${this.time}</p>`;
  }
}
