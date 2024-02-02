<script>
export default {
  data() {
    return {
      text: "Hello World",
    };
  },
};
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <input v-model="text">
  </div>
</template>
