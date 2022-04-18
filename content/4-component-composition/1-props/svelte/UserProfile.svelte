<script>
	export let name = '';
	export let age = null;
	export let favouriteColors = [];
	export let isAvailable = false;
</script>

<p>My name is {name} !</p>
<p>My age is {age} !</p>
<p>My favourite colors are {favouriteColors.join(', ')} !</p>
<p>I am {isAvailable ? 'available' : 'not available'}</p>
