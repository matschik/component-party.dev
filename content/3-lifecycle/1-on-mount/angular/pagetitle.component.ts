import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagetitle",
  template: `<p>Page title: {{ pageTitle }}</p>`,
})
export class PagetitleComponent implements OnInit {
  pageTitle = "";

  ngOnInit() {
    this.pageTitle = document.title;
  }
}
