<script setup>
import { ref, onMounted } from "vue";

const inputElement = ref();

onMounted(() => {
  inputElement.value.indeterminate = true;
});
</script>

<template>
  <input
    ref="inputElement"
    type="checkbox"
  >
</template>
