import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	canCome = true;

	onAnswerYes() {
		this.canCome = true;
	}

	onAnswerNo() {
		this.canCome = false;
	}
}
