<script>
  import AnswerButton from "./AnswerButton.svelte";

  let canCome = true;

  function onAnswerNo() {
    canCome = false;
  }

  function onAnswerYes() {
    canCome = true;
  }
</script>

<p>Are you happy?</p>
<AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
<p style="font-size: 50px;">{canCome ? "😀" : "😥"}</p>
