import { View } from '@dlightjs/dlight';
import UserProfile from './UserProfile.view';

@View
class App {
  user = {
    id: 1,
    username: 'unicorn42',
    email: 'unicorn42@example.com'
  }

  updateUserName(newUsername) {
    this.user.username = newUsername
  }

  Body() {
    h1('Hello world')
    env()
      .user(this.user)
      .updateUserName(this.updateUserName)
    {
      UserProfile()
    }
      
  }
}

export default App;