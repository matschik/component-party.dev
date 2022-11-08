<script>
export default {
  data() {
    return {
      isAvailable: true,
    };
  },
};
</script>

<template>
  <div>
    <input
      id="is-available"
      v-model="isAvailable"
      type="checkbox"
    >
    <label for="is-available">Is available</label>
  </div>
</template>
