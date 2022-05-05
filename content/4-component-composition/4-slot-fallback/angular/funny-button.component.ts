import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./funny-button.component.css'],
	template: `
		<button #container>
			<ng-content></ng-content>
		</button>

		<button *ngIf="!container.hasChildNodes()">
			<span>No content found</span>
		</button>
	`,
})
export class FunnyButtonComponent {}
