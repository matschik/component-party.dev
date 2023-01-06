import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./funny-button";

@customElement("x-app")
export class XApp extends LitElement {
  render() {
    return html`
      <funny-button></funny-button>
      <funny-button>Click me!</funny-button>
    `;
  }
}
