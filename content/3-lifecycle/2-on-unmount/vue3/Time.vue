<script setup>
import { ref, onUnmounted } from "vue";

const time = ref(new Date().toLocaleTimeString());

const timer = setInterval(() => {
  time.value = new Date().toLocaleTimeString();
}, 1000);

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>
