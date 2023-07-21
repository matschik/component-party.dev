<script>
  import AnswerButton from "./AnswerButton.svelte";

  let isHappy = true;

  function onAnswerNo() {
    isHappy = false;
  }

  function onAnswerYes() {
    isHappy = true;
  }
</script>

<p>Are you happy?</p>
<AnswerButton on:yes={onAnswerYes} on:no={onAnswerNo} />
<p style="font-size: 50px;">{isHappy ? "😀" : "😥"}</p>
