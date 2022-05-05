import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'double',
})
export class DoubleCountPipe implements PipeTransform {
	transform(value: number): number {
		return value * 2;
	}
}

@Component({
	selector: 'app-doublecount',
	template: '<div>{{ number | double }}</div>',
})
export class DoublecountComponent {
	count: number = 10;
}
