import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { createFetchUsersTask } from "./fetch-users-task";

@customElement("x-app")
export class XApp extends LitElement {
  fetchUsers = createFetchUsersTask(this);

  render() {
    return this.fetchUsers.render({
      pending: () => html`<p>Fetching users...</p>`,
      error: (e) => html`<p>An error occurred while fetching users</p>`,
      complete: (data) => html`
        <ul>
          ${data.map(
            (user) => html`
              <li>
                <img src=${user.picture.thumbnail} alt="user" />
                <p>${user.name.first} ${user.name.last}</p>
              </li>
            `
          )}
        </ul>
      `,
    });
  }
}
