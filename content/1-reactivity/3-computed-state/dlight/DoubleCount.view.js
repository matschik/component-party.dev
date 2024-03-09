import { View } from '@dlightjs/dlight';

@View
class DoubleCount {
  count = 10;
  doubleCount = this.count * 2;

  Body() {
    div(this.doubleCount)
  }
}

export default DoubleCount;