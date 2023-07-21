export class App {
  isHappy = false;

  handleAnswer(...reply) {
    this.isHappy = reply[0] === "yes" ? true : false;
  }
}
