import { View } from '@dlightjs/dlight';
import FunnyButton from './FunnyButton.view';

@View
class App {
  Body() {
    FunnyButton(); {
      "Click me!"
    }
  }
}

export default App;