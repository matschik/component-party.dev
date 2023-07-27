import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viewportsize",
  template: `<p>Viewport size: {{ viewportSize }}</p>`,
})
export class ViewportsizeComponent implements OnInit {
  viewportSize = "";

  ngOnInit() {
    this.viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  }
}
