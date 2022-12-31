export class EmitToParent {
  canCome = false;

  handleAnswer(...reply) {
    this.canCome = reply[0] === "yes" ? true : false;
  }
}
