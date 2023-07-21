<script>
  import AnswerButton from "./AnswerButton.svelte";

  let canCome = true;
</script>

<p>Are you happy?</p>
<AnswerButton on:yes={() => (canCome = true)} on:no={() => (canCome = false)} />
<p style="font-size: 50px;">{canCome ? "😀" : "😥"}</p>
