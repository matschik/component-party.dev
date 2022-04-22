import { Component } from '@angular/core';

@Component({
	selector: 'app-name',
})
export class NameComponent {
	name: string = 'John';

	constructor() {
		this.name = 'Jane';
		console.log(this.name);
	}
}
