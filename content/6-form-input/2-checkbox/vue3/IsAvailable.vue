<script setup>
import { ref } from "vue";

const isAvailable = ref(true);
</script>

<template>
  <input
    id="is-available"
    v-model="isAvailable"
    type="checkbox"
  >
  <label for="is-available">Is available</label>
</template>
