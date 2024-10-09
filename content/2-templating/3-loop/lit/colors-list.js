import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("colors-list")
export class ColorsList extends LitElement {
  colors = ["red", "green", "blue"];

  render() {
    return html`
      <ul>
        ${repeat(
          this.colors,
          (color) => color,
          (color) => html`<li>${color}</li>`
        )}
      </ul>
    `;
  }
}
