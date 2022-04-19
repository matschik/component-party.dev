import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-inputfocused',
	templateUrl: './inputfocused.component.html',
})
export class InputfocusedComponent implements AfterViewInit {
	@ViewChild('inputelement')
	inputElement: ElementRef<HTMLInputElement> | undefined;

	ngAfterViewInit(): void {
		this.inputElement?.nativeElement.focus();
	}
}
