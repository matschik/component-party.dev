import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@customElement("traffic-light")
export class TrafficLight extends LitElement {
  @state()
  lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }

  render() {
    return html`
      <button @click=${this.nextLight}>Next light</button>
      <p>Light is ${this.light}</p>
      <p>
        You must
        ${choose(this.light, [
          ["red", () => html`<span>STOP</span>`],
          ["orange", () => html`<span>SLOW DOWN</span>`],
          ["green", () => html`<span>GO</span>`],
        ])}
      </p>
    `;
  }
}
