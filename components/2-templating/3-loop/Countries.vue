<script setup>
	const countries = [
		"France",
		"United States",
		"Spain"
	]
</script>

<template>
	<ul>
		<li v-for="country in countries" :key="country">
			{{ country }}
		</li>
	</ul>
</template>