<script setup>
import useFetchUsers from "./useFetchUsers";

const { isLoading, error, data: users } = useFetchUsers();
</script>

<template>
  <p v-if="isLoading">Fetching users...</p>
  <p v-else-if="error">An error ocurred while fetching users</p>
  <ul v-else-if="users">
    <li
      v-for="user in users"
      :key="user.login.uuid"
    >
      <img
        :src="user.picture.thumbnail"
        alt="user"
      >
      <p>
        {{ user.name.first }}
        {{ user.name.last }}
      </p>
    </li>
  </ul>
</template>
