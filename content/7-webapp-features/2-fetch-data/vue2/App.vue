<script>
export default {
  data() {
    return {
      isLoading: false,
      error: undefined,
      users: undefined,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const { results: users } = await response.json();
        this.users = users;
        this.error = undefined;
      } catch (error) {
        this.error = error;
      } finally {
        this.users = undefined;
        this.isLoading = false;
      }
    },
  },
};
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
