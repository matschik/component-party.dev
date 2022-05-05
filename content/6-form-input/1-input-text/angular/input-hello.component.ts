import { Component } from '@angular/core';

@Component({
	selector: 'app-input-hello',
	template: '<input [(ngModel)]="inputValue" />',
})
export class InputHelloComponent {
	inputValue: string = '';
}
