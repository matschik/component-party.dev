import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile")
export class UserProfile extends LitElement {
  @property()
  name = "";

  @property({ type: Number })
  age = null;

  @property({ type: Array })
  favouriteColors = [];

  @property({ type: Boolean })
  isAvailable = false;

  render() {
    return html`
      <p>My name is ${this.name}</p>
      <p>My age is ${this.age}</p>
      <p>My favourite coloros are ${this.favouriteColors.join(", ")}</p>
      <p>I am ${this.isAvailable ? "available" : "not available"}</p>
    `;
  }
}
