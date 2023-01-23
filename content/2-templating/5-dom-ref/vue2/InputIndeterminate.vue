<script>
export default {
  mounted() {
    this.$refs.inputElement.indeterminate = true;
  },
};
</script>

<template>
  <input
    ref="inputElement"
    type="checkbox"
  >
</template>
