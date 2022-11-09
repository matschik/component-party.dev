import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-app")
export class XApp extends LitElement {
  @state()
  loading = false;

  @state()
  error;

  @state()
  data;

  async fetchUsers() {
    this.loading = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const { results: users } = await response.json();
      this.data = users;
      this.error = undefined;
    } catch (err) {
      this.data = undefined;
      this.error = err;
    }
    this.loading = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUsers();
  }

  render() {
    if (this.loading) {
      return html`<p>Fetching users...</p>`;
    }
    if (this.error) {
      return html`<p>An error occurred while fetching users</p>`;
    }
    if (this.data) {
      return html`
        <ul>
          ${this.data.map(
            (user) => html`
              <li>
                <img src=${user.picture.thumbnail} alt="user" />
                <p>${user.name.first} ${user.name.last}</p>
              </li>
            `
          )}
        </ul>
      `;
    }
  }
}
