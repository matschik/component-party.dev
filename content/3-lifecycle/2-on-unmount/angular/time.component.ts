import { Component, NgModule, OnDestroy } from "@angular/core";

@Component({
  selector: "app-time",
  template: `<p>Current time: {{ time }}</p>`,
})
export class TimeComponent implements OnDestroy {
  time = new Date().toLocaleTimeString();

  timer = setInterval(() => {
    this.time = new Date().toLocaleTimeString();
  }, 1000);

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}

@NgModule({
  declarations: [TimeComponent],
  exports: [TimeComponent],
})
export class TimeModule {}
