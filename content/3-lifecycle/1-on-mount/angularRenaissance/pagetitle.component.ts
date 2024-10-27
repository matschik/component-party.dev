import { Component, OnInit, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-pagetitle",
  template: `<p>Page title: {{ pageTitle() }}</p>`,
})
export class PagetitleComponent implements OnInit {
  pageTitle = signal("");

  ngOnInit() {
    this.pageTitle.set(document.title);
  }
}
