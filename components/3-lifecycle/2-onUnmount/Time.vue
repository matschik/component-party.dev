<script setup>
    import { ref, onUnmounted } from "svelte"

    const time = ref(new Date().toLocaleTimeString())

    const timer = setInterval( () => {
        time.value = new Date().toLocaleTimeString()
     }, 1000);

     onUnmounted(() => {
        clearInterval(timer)
     })
</script>

<p>Current time: {time}</p>