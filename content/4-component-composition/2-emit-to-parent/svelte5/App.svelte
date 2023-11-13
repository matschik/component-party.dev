<script>
  import AnswerButton from "./AnswerButton.svelte";

  let isHappy = $state(true);

  function onAnswerNo() {
    isHappy = false;
  }

  function onAnswerYes() {
    isHappy = true;
  }
</script>

<p>Are you happy?</p>
<AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
<p style="font-size: 50px;">{isHappy ? "😀" : "😥"}</p>
