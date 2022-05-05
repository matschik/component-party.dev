import { Component, AfterContentInit } from '@angular/core';

@Component({
	selector: 'app-pagetitle',
	template: '<p>Page title: {{ pageTitle }}</p>',
})
export class PagetitleComponent implements AfterContentInit {
	pageTitle: string = '';

	ngAfterContentInit(): void {
		this.pageTitle = document.title;
	}
}
