import { NewElement, NewSignal } from "regular-framework/client";
import AnswerButton from "./AnswerButton";

export default () => {
  const isHappy = NewSignal(true);
  const yes = () => {
    isHappy.value = true;
  };
  const no = () => {
    isHappy.value = false;
  };

  return [
    NewElement("p", {}, "Are you happy?"),
    AnswerButton(yes, no),
    NewElement(
      "p",
      {
        styles: {
          fontSize: "50px",
        },
      },
      () => (isHappy.value ? "😊" : "😢")
    ),
  ];
};
