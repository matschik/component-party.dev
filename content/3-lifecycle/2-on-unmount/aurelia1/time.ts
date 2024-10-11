export class Time {
  time: string = new Date().toLocaleTimeString();
  timer: number;

  constructor() {
    this.timer = window.setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  detached() {
    clearInterval(this.timer);
  }
}
