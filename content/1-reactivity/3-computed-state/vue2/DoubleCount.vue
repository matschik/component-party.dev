<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>

<template>
  <div>{{ doubleCount }}</div>
</template>
