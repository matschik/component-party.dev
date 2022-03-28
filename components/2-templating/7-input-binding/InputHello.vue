<script setup>
    import {ref} from "vue"
    const text = ref("Hello World")
</script>

<p>{{text}}</p>

<input v-model="text" />