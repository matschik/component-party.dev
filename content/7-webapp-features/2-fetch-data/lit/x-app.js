import { Task } from "@lit/task";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("x-app")
export class XApp extends LitElement {
  fetchUsers = new Task(this, {
    task: async () => {
      const response = await fetch("https://randomuser.me/api/?results=3");
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
    args: () => [],
  });

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
