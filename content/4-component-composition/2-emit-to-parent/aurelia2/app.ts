export class App {
  isHappy = false;

  handleAnswer = (answer = false) => {
    this.isHappy = answer;
  };
}
