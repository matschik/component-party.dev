<script setup>
import { ref, onMounted } from "vue";
const pageTitle = ref("");
onMounted(() => {
  pageTitle.value = document.title;
});
</script>

<template>
  <p>Page title: {{ pageTitle }}</p>
</template>
