<script>
	import AnswerButton from './AnswerButton.svelte';

	let canCome = true;

	function onAnswerNo() {
		canCome = false;
	}

	function onAnswerYes() {
		canCome = true;
	}
</script>

<p>Can I come ?</p>
<AnswerButton on:yes={onAnswerYes} on:no={onAnswerNo} />
<p style="font-size: 50px;">{canCome ? '😀' : '😥'}</p>
