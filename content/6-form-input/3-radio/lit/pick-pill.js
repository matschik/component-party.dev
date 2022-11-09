import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("pick-pill")
export class PickPill extends LitElement {
  @state()
  picked = "red";

  handleChange(event) {
    this.picked = event.target.value;
  }

  render() {
    return html`
      <div>Picked: ${this.picked}</div>

      <input
        id="blue-pill"
        name="pill"
        ?checked=${this.picked === "blue"}
        type="radio"
        value="blue"
        @change=${this.handleChange}
      />
      <label for="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        name="pill"
        ?checked=${this.picked === "red"}
        type="radio"
        value="red"
        @change=${this.handleChange}
      />
      <label for="red-pill">Red pill</label>
    `;
  }
}
