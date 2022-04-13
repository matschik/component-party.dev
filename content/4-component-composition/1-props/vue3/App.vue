<script setup>
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';

const username = ref('John');
</script>

<template>
  <input v-model="username">
  <UserProfile :name="username" />
</template>
