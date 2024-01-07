import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";

import { userContext } from "./user-context";

@customElement("user-profile")
export class UserProfile extends LitElement {
  @consume({ context: userContext })
  @property({ type: Object, attribute: false })
  user;

  @property({ type: Function, attribute: false })
  updateUsername;

  handleUpdateUsername() {
    this.updateUsername("Jane");
  }

  render() {
    return html`
      <div>
        <h2>My Profile</h2>
        <p>Username: ${this.user.username}</p>
        <p>Email: ${this.user.email}</p>
        <button @click="${this.handleUpdateUsername}">
          Update username to Jane
        </button>
      </div>
    `;
  }
}
