import { View } from '@dlightjs/dlight';

@View
class Counter {
  count = 0;

  incrementCount() {
    this.count++;
  }

  Body() {
    p(`Counter: ${this.count}`)
    button('+1')
      .onClick(this.incrementCount)
  }
}

export default Counter;