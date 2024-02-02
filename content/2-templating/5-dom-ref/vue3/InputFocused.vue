<script setup>
import { ref, onMounted } from "vue";

const inputElement = ref();

onMounted(() => {
  inputElement.value.focus();
});
</script>

<template>
  <input ref="inputElement">
</template>
