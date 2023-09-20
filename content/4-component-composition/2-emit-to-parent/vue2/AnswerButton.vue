<script>
export default {
  methods: {
    clickYes() {
      this.$emit("yes");
    },
    clickNo() {
      this.$emit("no");
    },
  },
};
</script>

<template>
  <div>
    <button @click="clickYes">YES</button>

    <button @click="clickNo">NO</button>
  </div>
</template>
