import { View } from '@dlightjs/dlight';
import UserProfile from './UserProfile.view';

@View
class App {
  Body() {
    UserProfile()
      .name('John Doe')
      .age(20)
      .favouriteColors(['green', 'blue', 'red'])
      .isAvailable(true)
  }
}

export default App;