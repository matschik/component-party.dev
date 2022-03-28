<script setup>
    const props = defineProps({
        name: String
    })
</script>

<p>Hello {props.name} !</p>