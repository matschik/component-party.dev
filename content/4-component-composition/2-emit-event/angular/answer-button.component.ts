import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-answer-button',
	templateUrl: './answer-button.component.html',
})
export class AnswerButtonComponent {
	@Output() yes = new EventEmitter<void>();
	@Output() no = new EventEmitter<void>();
}
