<script>
export default {
  mounted() {
    this.$refs.inputElement.focus();
  },
};
</script>

<template>
  <input ref="inputElement">
</template>
