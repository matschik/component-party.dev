<script>
import AnswerButton from "./AnswerButton.vue";
export default {
  components: {
    AnswerButton,
  },
  data() {
    return {
      canCome: true,
    };
  },
  methods: {
    onAnswerNo() {
      this.canCome = false;
    },
    onAnswerYes() {
      this.canCome = true;
    },
  },
};
</script>

<template>
  <div>
    <p>Are you happy?</p>
    <AnswerButton @yes="onAnswerYes" @no="onAnswerNo" />
    <p style="font-size: 50px">
      {{ canCome ? "😀" : "😥" }}
    </p>
  </div>
</template>
