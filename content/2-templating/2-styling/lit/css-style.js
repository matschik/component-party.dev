import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("css-style")
export class CssStyle extends LitElement {
  static styles = css`
    .title {
      color: red;
    }
  `;

  render() {
    return html`
      <h1 class="title">I am red</h1>
      <button style=${styleMap({ fontSize: "10rem" })}>I am a button</button>
    `;
  }
}
