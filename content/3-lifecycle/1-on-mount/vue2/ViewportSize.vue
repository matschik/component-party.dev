<script>
export default {
  data() {
    return {
      viewportSize: "",
    };
  },
  mounted() {
    this.viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  },
};
</script>

<template>
  <p>Viewport size: {{ viewportSize }}</p>
</template>
