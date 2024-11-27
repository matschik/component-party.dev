import { Component, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-page-title",
  template: `<p>Page title: {{ pageTitle() }}</p>`,
})
export class PageTitleComponent implements OnInit {
  pageTitle = signal("");

  ngOnInit() {
    this.pageTitle.set(document.title);
  }
}
