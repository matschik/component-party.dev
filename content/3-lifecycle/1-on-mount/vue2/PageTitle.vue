<script>
export default {
  data() {
    return {
      pageTitle: "",
    };
  },
  mounted() {
    this.pageTitle = document.title;
  },
};
</script>

<template>
  <p>Page title: {{ pageTitle }}</p>
</template>
