<script>
import AnswerButton from "./AnswerButton.vue";
export default {
  components: {
    AnswerButton,
  },
  data() {
    return {
      isHappy: true,
    };
  },
  methods: {
    onAnswerNo() {
      this.isHappy = false;
    },
    onAnswerYes() {
      this.isHappy = true;
    },
  },
};
</script>

<template>
  <div>
    <p>Are you happy?</p>
    <AnswerButton
      @yes="onAnswerYes"
      @no="onAnswerNo"
    />
    <p style="font-size: 50px">
      {{ isHappy ? "😀" : "😥" }}
    </p>
  </div>
</template>
