import { Component } from '@angular/core';

@Component({
	selector: 'app-colors',
	templateUrl: './colors.component.html',
})
export class ColorsComponent {
	colors: string[] = ['red', 'green', 'blue'];
}
