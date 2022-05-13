import { LitElement, html } from 'lit';

export class Name extends LitElement {
	constructor() {
		super();
		this.name = 'John';
		this.name = 'Jane';
	}

	render() {
		return html`<h1>Hello ${this.name}!</h1>`;
	}
}
customElements.define('name', Name);
