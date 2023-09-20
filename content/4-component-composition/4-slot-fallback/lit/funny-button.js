import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("funny-button")
export class FunnyButton extends LitElement {
  static styles = css`
    button {
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 10px 20px;
      fontsize: 30px;
      border: 2px solid #fff;
      margin: 8px;
      transform: scale(0.9);
      boxshadow: 4px 4px rgba(0, 0, 0, 0.4);
      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;
      outline: 0;
    }
  `;

  render() {
    return html`
      <button>
        <slot>
          <span>No content found</span>
        </slot>
      </button>
    `;
  }
}
