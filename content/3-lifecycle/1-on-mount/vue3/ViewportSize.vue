<script setup>
import { ref, onMounted } from "vue";
const viewportSize = ref("");
onMounted(() => {
  viewportSize.value = `${window.innerWidth} × ${window.innerHeight}`;
});
</script>

<template>
  <p>Viewport size: {{ viewportSize }}</p>
</template>
