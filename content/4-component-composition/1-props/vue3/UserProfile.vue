<script setup>
const props = defineProps({
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
  favouriteColors: {
    type: Array,
    required: true,
    default: () => [],
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<template>
  <p>My name is {{ props.name }}!</p>
  <p>My age is {{ props.age }}!</p>
  <p>My favourite colors are {{ props.favouriteColors.join(", ") }}!</p>
  <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
</template>
