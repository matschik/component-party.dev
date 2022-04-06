<script setup>
import { ref } from 'vue';
import Hello from './UserProfile.vue';

const username = ref('John');
</script>

<template>
  <input v-model="username">
  <Hello :name="username" />
</template>
