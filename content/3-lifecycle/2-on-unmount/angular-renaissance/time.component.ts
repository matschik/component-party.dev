import { Component, OnDestroy, signal } from "@angular/core";

/* FIXME with rxjs + toSignal (but no need for onDestroy anymore)
```ts
@Component({
  standalone: true,
  selector: "app-time",
  template: `<p>Current time: {{ time() }}</p>`,
})
export class TimeComponent {
  time = toSignal(timer(0, 1000).pipe(
    map(() => new Date().toLocaleTimeString()),
  ));
}
```
*/
@Component({
  standalone: true,
  selector: "app-time",
  template: `<p>Current time: {{ time() }}</p>`,
})
export class TimeComponent implements OnDestroy {
  time = signal(new Date().toLocaleTimeString());

  timer = setInterval(
    () => this.time.set(new Date().toLocaleTimeString()),
    1000
  );

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
