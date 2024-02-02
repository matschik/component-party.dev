<script setup>
import { ref } from "vue";
const text = ref("Hello World");
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text">
</template>
