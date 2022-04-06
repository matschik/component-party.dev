# Component Party for Svelte

# Reactivity
## Declare state
```svelte
<script>
	let name = 'John';
	console.log(name);
</script>

```

## Update state
```svelte
<script>
	let name = 'John';
	name = 'Jane';
	console.log(name);
</script>

```

## Computed state
```svelte
<script>
	let count = 10;
	$: doubleCount = count * 2;
	console.log(doubleCount);
</script>

```

## Watch state
# Templating
## Minimal template
```svelte
<h1>Hello world</h1>

```

## Styling
```svelte
<template>
	<h1 class="title">Hello world</h1>
	<button style="font-size: 10rem;">I am a button</button>
</template>

<style>
	.title {
		color: red;
	}
</style>

```

## Loop
```svelte
<script>
	const colors = ['red', 'green', 'blue'];
</script>

<ul>
	{#each colors as color}
		<li>{color}</li>
	{/each}
</ul>

```

## Event click
```svelte
<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<p>Counter: {count}</p>
<button on:click={incrementCount}>+1</button>

```

## Dom ref
```svelte
<script>
	import { onMount } from 'svelte';

	let inputElement;

	onMount(() => {
		inputElement.focus();
	});
</script>

<input bind:this={inputElement} />

```

## Conditional
```svelte
<script>
	const TRAFFIC_LIGHTS = ['red', 'orange', 'green'];
	let lightIndex = 0;

	$: light = TRAFFIC_LIGHTS[lightIndex];

	function nextLight() {
		if (lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
			lightIndex = 0;
		} else {
			lightIndex++;
		}
	}
</script>

<button on:click={nextLight}>Next light</button>
<p>Light is: {light}</p>
<p>
	You must
	{#if light === 'red'}
		STOP
	{:else if light === 'orange'}
		SLOW DOWN
	{:else if light === 'green'}
		GO
	{/if}
</p>

```

# Lifecycle
## On mount
```svelte
<script>
	import { onMount } from 'svelte';
	let pageTitle = '';
	onMount(() => {
		pageTitle = document.title;
	});
</script>

<p>Page title is: {pageTitle}</p>

```

## On unmount
```svelte
<script>
	import { onDestroy } from 'svelte';

	let time = new Date().toLocaleTimeString();

	const timer = setInterval(() => {
		time = new Date().toLocaleTimeString();
	}, 1000);

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<p>Current time: {time}</p>

```

# Component composition
## Props
```svelte
<script>
	import UserProfile from './UserProfile.svelte';
</script>

<UserProfile name="John" age={20} favouriteColors={['green', 'blue', 'red']} isAvailable />

```

```svelte
<script>
	export let name = ""
	export let age = null
	export let favouriteColors = []
	export let isAvailable = false
</script>

<p>My name is {name} !</p>
<p>My age is {age} !</p>
<p>My favourite colors are {favouriteColors.split(', ')} !</p>
<p>I am {isAvailable ? 'available' : 'not available'}</p>

```

## Event custom
## Slot
## Slot named
## Slot props
## Event dom forwarding
# Store context
# Form input
## Input binding
```svelte
<script>
	let text = 'Hello World';
</script>

<p>{text}</p>
<input bind:value={text} />

```

# Real usecase
## Todolist
## Fetch
