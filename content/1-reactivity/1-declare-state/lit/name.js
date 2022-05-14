import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('name')
export class Name extends LitElement {
	name = 'John';

	render() {
		return html`<h1>Hello ${this.name}!</h1>`;
	}
}
