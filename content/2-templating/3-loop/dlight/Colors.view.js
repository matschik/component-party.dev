import { View } from '@dlightjs/dlight';

@View
class Colors {
  colors = ['red', 'green', 'blue'];

  Body() {
    ul(); {
      for (const color of this.colors) {
        li(color);
      }
    }
  }
}

export default Colors;