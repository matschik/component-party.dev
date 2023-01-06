export class Time {
  time: string = new Date().toLocaleTimeString();
  timer: any;

  constructor() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  detached() {
    clearInterval(this.timer);
  }
}
