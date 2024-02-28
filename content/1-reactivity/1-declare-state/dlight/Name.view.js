import { View } from '@dlightjs/dlight';

@View
class Name {
  name = 'John';

  Body() {
    h1(`Hello ${this.name}`)
  }
}

export default Name;