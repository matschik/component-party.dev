import { View } from '@dlightjs/dlight';

@View
class Name {
  name = 'John';

  willMount() {
    this.name = 'Jane';
  }

  Body() {
    h1(`Hello ${this.name}`)
  }
}

export default Name;