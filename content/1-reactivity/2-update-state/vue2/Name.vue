<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  created() {
    this.name = "Jane";
  },
};
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
