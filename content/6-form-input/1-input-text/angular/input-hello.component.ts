import { Component } from '@angular/core';

interface InputEvent {
	target: HTMLInputElement;
}

@Component({
	selector: 'app-input-hello',
	template: ` <input [value]="inputValue" (input)="onInput($event)" /> `,
})
export class InputHelloComponent {
	inputValue: string = '';

	onInput(event: InputEvent) {
		this.inputValue = event.target.value;
	}
}
