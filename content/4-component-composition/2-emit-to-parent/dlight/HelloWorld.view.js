import { View } from '@dlightjs/dlight';

@View
class AnswerButton {
  @Prop onYes;
  @Prop onNo;

  Body() {
    button('Yes')
      .onClick(this.onYes)
    button('No')
      .onClick(this.onNo)
  }
}

export default AnswerButton;