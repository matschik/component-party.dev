import { View } from "@dlightjs/dlight";
import AnswerButton from "./HelloWorld.view";

@View
class App {
  isHappy = true;
  onAnswerNo() {
    this.isHappy = false;
  }
  onAnswerYes() {
    this.isHappy = true;
  }

  Body() {
    p("Are you happy?");
    AnswerButton().onYes(this.onAnswerYes).onNo(this.onAnswerNo);
    p(this.isHappy ? "😀" : "😥").style({ fontSize: "50px" });
  }
}

export default App;
