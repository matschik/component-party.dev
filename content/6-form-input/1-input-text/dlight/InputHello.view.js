import { View } from '@dlightjs/dlight';

@View
class InputHello {
  text = 'Hello World';

  handleInput(event) {
    this.text = event.target.value;
  }

  Body() {
    p(this.text)
    input()
      .type('text')
      .onInput(this.handleInput)
  }
}

export default InputHello;