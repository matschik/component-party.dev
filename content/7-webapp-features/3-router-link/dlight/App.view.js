import { View } from '@dlightjs/dlight';

@View
class App {
  Body() {
    ul(); {
      li(); {
        a('Home')
          .href('/')
      }
      li(); {
        a('About')
          .href('/about')
      }
    }
  }
}

export default App;