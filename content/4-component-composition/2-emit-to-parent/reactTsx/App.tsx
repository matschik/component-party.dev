import { useState } from "react";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div>
      <AnswerButton
        onYes={() => setAnswer("Yes")}
        onNo={() => setAnswer("No")}
      />
      {answer && <p>Your answer is: {answer}</p>}
    </div>
  );
}
