<script>
export default {
  data() {
    return {
      selectedColorId: 2,
      colors: [
        { id: 1, text: "red" },
        { id: 2, text: "blue" },
        { id: 3, text: "green" },
        { id: 4, text: "gray", isDisabled: true },
      ],
    };
  },
};
</script>

<template>
  <select v-model="selectedColorId">
    <option
      v-for="color in colors"
      :key="color.id"
      :value="color.id"
      :disabled="color.isDisabled"
    >
      {{ color.text }}
    </option>
  </select>
</template>
