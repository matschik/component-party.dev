import { View } from '@dlightjs/dlight';

@View
class UserProfile {
  @Prop name = '';
  @Prop age = null;
  @Prop favouriteColors = [];
  @Prop isAvailable = false;

  Body() {
    p(`My name is ${this.name}!`)
    p(`My age is ${this.age}!`)
    p(`My favourite colors are ${this.favouriteColors.join(', ')}!`)
    p(`I am ${this.isAvailable ? 'available' : 'not available'}`)
  }
}

export default UserProfile;