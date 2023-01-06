<script setup>
import { ref } from "vue";
import AnswerButton from "./AnswerButton.vue";

let canCome = ref(true);

function onAnswerNo() {
  canCome.value = false;
}

function onAnswerYes() {
  canCome.value = true;
}
</script>

<template>
  <p>Are you happy?</p>
  <AnswerButton @yes="onAnswerYes" @no="onAnswerNo" />
  <p style="font-size: 50px">
    {{ canCome ? "😀" : "😥" }}
  </p>
</template>
