<script setup>
import { ref, provide } from "vue";
import UserProfile from "./UserProfile.vue";

const user = ref({
  id: 1,
  username: "unicorn42",
  email: "unicorn42@example.com",
});

function updateUsername(username) {
  user.value.username = username;
}

provide("user", { user, updateUsername });
</script>

<template>
  <h1>Welcome back, {{ user.username }}</h1>
  <UserProfile />
</template>
