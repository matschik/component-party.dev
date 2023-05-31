export class Time {
  time: string = new Date().toLocaleTimeString();
  timer: number;

  constructor() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  dispose() {
    clearInterval(this.timer);
  }
}
