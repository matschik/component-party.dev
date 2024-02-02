<script>
export default {
  data() {
    return {
      picked: "red",
    };
  },
};
</script>

<template>
  <div>
    <div>Picked: {{ picked }}</div>

    <input
      id="blue-pill"
      v-model="picked"
      type="radio"
      value="blue"
    >
    <label for="blue-pill">Blue pill</label>

    <input
      id="red-pill"
      v-model="picked"
      type="radio"
      value="red"
    >
    <label for="red-pill">Red pill</label>
  </div>
</template>
