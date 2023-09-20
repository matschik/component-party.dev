<script>
  const {
    name = "",
    age = null,
    favouriteColors = [],
    isAvailable = false,
  } = $props();
</script>

<p>My name is {name}!</p>
<p>My age is {age}!</p>
<p>My favourite colors are {favouriteColors.join(", ")}!</p>
<p>I am {isAvailable ? "available" : "not available"}</p>
