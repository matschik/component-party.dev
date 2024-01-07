import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ContextProvider } from "@lit/context";

import { userContext } from "./user-context";

import "./user-profile";

@customElement("x-app")
export class XApp extends LitElement {
  @state()
  user = {
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  };

  provider = new ContextProvider(this, {
    context: userContext,
    initialValue: this.user,
  });

  updateUsername(newUsername) {
    this.user = { ...this.user, username: newUsername };
    this.provider.setValue(this.user);
  }

  render() {
    return html` <h1>Welcome back, ${this.user.username}</h1>
      <user-profile
        .user="${this.user}"
        .updateUsername=${this.updateUsername.bind(this)}
      ></user-profile>`;
  }
}
