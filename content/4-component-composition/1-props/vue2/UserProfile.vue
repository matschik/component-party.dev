<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: null,
    },
    favoriteColors: {
      type: Array,
      required: true,
      default: () => [],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <p>My name is {{ name }}!</p>
    <p>My age is {{ age }}!</p>
    <p>My favorite colors are {{ favoriteColors.join(", ") }}!</p>
    <p>I am {{ isAvailable ? "available" : "not available" }}</p>
  </div>
</template>
