<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: { UserProfile },
  provide() {
    return {
      user: Object.assign(this.user, {
        updateUsername: this.updateUsername,
      }),
    };
  },
  data() {
    return {
      user: {
        id: 1,
        username: "unicorn42",
        email: "unicorn42@example.com",
      },
    };
  },
  methods: {
    updateUsername(newUsername) {
      this.user.username = newUsername;
    },
  },
};
</script>

<template>
  <div>
    <h1>Welcome back, {{ user.username }}</h1>
    <UserProfile />
  </div>
</template>
