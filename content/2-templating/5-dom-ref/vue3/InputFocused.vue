<script setup>
import { useTemplateRef, onMounted } from "vue";

const inputElement = useTemplateRef("inputElement");

onMounted(() => {
  inputElement.value.focus();
});
</script>

<template>
  <input ref="inputElement">
</template>
