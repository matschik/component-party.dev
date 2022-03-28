<script setup>
    import {ref} from "vue"
    const count = ref(10)
    const doubleCount = computed(() => count.value * 2)
</script>

<template>
    <p>{{doubleCount}}</p>
</template>
