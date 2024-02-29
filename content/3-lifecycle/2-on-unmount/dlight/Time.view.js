import { View } from "@dlightjs/dlight";

@View
class Time {
  time = new Date().toLocaleTimeString();
  timer = setInterval(() => {
    this.time = new Date().toLocaleTimeString();
  }, 1000);
  willUnmount() {
    clearInterval(this.timer);
  }

  Body() {
    p(`Current time: ${this.time}`);
  }
}

export default Time;
