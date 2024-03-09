import { View, use } from '@dlightjs/dlight';
import FetchUsers from './FetchUsers.model';

@View
class App {
  userModel = use(FetchUsers)

  Body() {
    if (this.userModel.loading) {
      p('Fetching users...')
    } else if (this.userModel.error) {
      p('An error occurred while fetching users')
    } else if (this.userModel.data) {
      ul(); {
        for (const user of this.userModel.data) {
          key: user.login.uuid
          li(); {
            img()
              .src(user.picture.thumbnail)
              .alt('user')
            p(`${user.name.first} ${user.name.last}`)
          }
        }
      }
    }
  }
}

export default App;