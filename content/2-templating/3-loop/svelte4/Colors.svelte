<script>
  const colors = ["red", "green", "blue"];
</script>

<ul>
  {#each colors as color (color)}
    <li>{color}</li>
  {/each}
</ul>
