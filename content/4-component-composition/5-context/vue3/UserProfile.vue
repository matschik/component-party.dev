<script setup>
import { inject } from "vue";
const { user, updateUsername } = inject("user");
</script>

<template>
  <div>
    <h2>My Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="() => updateUsername('Jane')">
      Update username to Jane
    </button>
  </div>
</template>
