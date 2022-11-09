import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("is-available")
export class IsAvailable extends LitElement {
  @state()
  isAvailable = false;

  handleChange() {
    this.isAvailable = !this.isAvailable;
  }

  render() {
    return html`
      <input
        id="is-available"
        type="checkbox"
        ?checked=${this.isAvailable}
        @change=${this.handleChange}
      />
      <label for="is-available">Is available</label>
    `;
  }
}
