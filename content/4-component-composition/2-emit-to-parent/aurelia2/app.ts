export class App {
  canCome = false;

  handleAnswer = (answer = false) => {
    this.canCome = answer;
  };
}
