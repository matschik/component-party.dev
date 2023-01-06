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
    <p>My name is {{ props.name }}!</p>
    <p>My age is {{ props.age }}!</p>
    <p>My favorite colors are {{ props.favoriteColors.join(", ") }}!</p>
    <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
  </div>
</template>
