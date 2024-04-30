import { Component, OnInit } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-pagetitle",
  template: `<p>Page title: {{ pageTitle }}</p>`,
})
export class PagetitleComponent implements OnInit {
  pageTitle = "";

  ngOnInit() {
    this.pageTitle = document.title;
  }
}
