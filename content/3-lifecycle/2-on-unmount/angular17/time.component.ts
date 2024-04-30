import { Component, OnDestroy } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-time",
  template: `<p>Current time: {{ time }}</p>`,
})
export class TimeComponent implements OnDestroy {
  time: string = new Date().toLocaleTimeString();
  timer: number;

  constructor() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
