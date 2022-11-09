<script>
export default {
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>
