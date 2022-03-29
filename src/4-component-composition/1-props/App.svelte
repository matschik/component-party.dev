<script>
    import Hello from "./Hello.svelte"
    let username = "John"
</script>

<input bind:value={username} />

<Hello name={username} />