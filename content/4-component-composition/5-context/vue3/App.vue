<script setup>
import UserProfile from "./UserProfile.vue";
import { user } from "./userStore";
</script>

<template>
  <h1>Welcome back, {{ user.username }}</h1>
  <UserProfile />
</template>
