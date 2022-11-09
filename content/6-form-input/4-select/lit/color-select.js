import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("color-select")
export class ColorSelect extends LitElement {
  colors = [
    { id: 1, text: "red" },
    { id: 2, text: "blue" },
    { id: 3, text: "green" },
    { id: 4, text: "gray", isDisabled: true },
  ];

  @state()
  selectedColorId = 2;

  handleChange(event) {
    this.selectedColorId = event.target.value;
  }

  render() {
    return html`
      <select @change=${this.handleChange}>
        ${this.colors.map(
          (color) =>
            html`<option
              value=${color.id}
              ?selected=${this.selectedColorId === color.id}
              ?disabled=${color.isDisabled}
            >
              ${color.text}
            </option>`
        )}
      </select>
    `;
  }
}
