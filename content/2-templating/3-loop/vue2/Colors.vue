<script>
export default {
  data() {
    return {
      colors: ["red", "green", "blue"],
    };
  },
};
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>
