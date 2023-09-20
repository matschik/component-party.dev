<script setup>
const emit = defineEmits(["yes", "no"]);

function clickYes() {
  emit("yes");
}

function clickNo() {
  emit("no");
}
</script>

<template>
  <button @click="clickYes">YES</button>

  <button @click="clickNo">NO</button>
</template>
