import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
	selector: 'app-time',
	template: '<p>Current time: {{ time$ | async }}</p>',
})
export class TimeComponent {
	time$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
}
