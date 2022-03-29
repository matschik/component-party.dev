<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	}
});
</script>

<template>
  <p>Hello {{ props.name }} !</p>
</template>
