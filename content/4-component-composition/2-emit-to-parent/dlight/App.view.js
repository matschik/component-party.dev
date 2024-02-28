import { View } from '@dlightjs/dlight';

@View
class App {
  isHappy = true;

  onYes() {
    this.isHappy = true;
  }

  onNo() {
    this.isHappy = false;
  }

  Body() {
    p('Are you happy?')
    AnswerButton()
      .onYes(this.onYes)
      .onNo(this.onNo)
    p(this.isHappy ? '😀' : '😥')
      .style({ fontSize: '50px' })
  }
}

export default App;