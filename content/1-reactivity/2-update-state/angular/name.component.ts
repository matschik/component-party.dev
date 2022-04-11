import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-name',
})
export class NameComponent {
	@Input() name: string = 'John';

	constructor() {
		this.name = 'Jane';
		console.log(this.name);
	}
}
