export class App {
  canCome = false;

  handleAnswer(...reply) {
    this.canCome = reply[0] === "yes" ? true : false;
  }
}
