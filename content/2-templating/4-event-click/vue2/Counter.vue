<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="incrementCount">+1</button>
  </div>
</template>
