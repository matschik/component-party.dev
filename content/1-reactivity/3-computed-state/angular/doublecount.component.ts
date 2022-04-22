import { Component, Pipe, PipeTransform, ChangeDetectionStrategy } from '@angular/core';

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
	template: ' <div></div>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoublecountComponent {
	count: number = 10;

	constructor() {}
}
