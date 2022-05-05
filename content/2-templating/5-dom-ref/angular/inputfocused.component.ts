import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-inputfocused',
	template: '<input type="text" #inputelement />',
})
export class InputfocusedComponent implements AfterViewInit {
	@ViewChild('inputelement')
	inputElement: ElementRef<HTMLInputElement> | undefined;

	ngAfterViewInit(): void {
		this.inputElement?.nativeElement.focus();
	}
}
