import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("viewport-size")
export class ViewportSize extends LitElement {
  @state()
  viewportSize = "";

  connectedCallback() {
    super.connectedCallback();
    this.viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  }

  render() {
    return html`<p>Viewport size: ${this.viewportSize}</p>`;
  }
}
