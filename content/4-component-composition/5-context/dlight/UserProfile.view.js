import { View } from '@dlightjs/dlight';

@View
class UserProfile {
  @Env user
  @Env updateUserName

  Body() {
    div(); {
      h2('My Profile')
      p(`Username: ${this.user.username}`)
      p(`Email: ${this.user.email}`)
      button('Update username to Jane')
        .onClick(() => this.updateUserName('Jane'))
    }
  }
}

export default UserProfile;