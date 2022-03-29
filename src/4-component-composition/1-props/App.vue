<script setup>
import { ref } from 'vue';
import Hello from './Hello.vue';

const username = ref('John');
</script>

<template>
  <input v-model="username">
  <Hello :name="username" />
</template>
