import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("page-title")
export class PageTitle extends LitElement {
  @state()
  pageTitle = "";

  connectedCallback() {
    super.connectedCallback();
    this.pageTitle = document.title;
  }

  render() {
    return html`<p>Page title: ${this.pageTitle}</p>`;
  }
}
