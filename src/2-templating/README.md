# Templating
## Minimal
### React
```jsx
export default function HelloWorld() {
	return <h1>Hello world</h1>;
}

```

### Svelte
```svelte
<h1>Hello world</h1>

```

### Vue 3
```vue
<template>
  <h1>Hello world</h1>
</template>

```

## Styling
### React
```jsx
export default function HelloWorld() {
	// how do you declare title class ??

	return (
		<>
			<h1 className="title">Hello world</h1>
			<button style={{ 'font-size': '10rem' }}>I am a button</button>
		</>
	);
}

```

### Svelte
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

### Vue 3
```vue
<template>
  <h1 class="title">
    Hello world
  </h1>
  <button style="font-size: 10rem">
    I am a button
  </button>
</template>

<style scoped>
.title {
	color: red;
}
</style>

```

## Loop
### React
```jsx
export default function Countries() {
	const countries = ['France', 'United States', 'Spain'];
	return (
		<ul>
			{countries.map((country) => (
				<li key={country}>{country}</li>
			))}
		</ul>
	);
}

```

### Svelte
```svelte
<script>
	const countries = ['France', 'United States', 'Spain'];
</script>

<ul>
	{#each countries as country}
		<li>{country}</li>
	{/each}
</ul>

```

### Vue 3
```vue
<script setup>
const countries = ['France', 'United States', 'Spain'];
</script>

<template>
  <ul>
    <li
      v-for="country in countries"
      :key="country"
    >
      {{ country }}
    </li>
  </ul>
</template>

```

## Event click
### React
```jsx
import { useState } from 'react';

export default function Name() {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount(count + 1);
	}

	return (
		<>
			<p>Counter: {count}</p>
			<button onClick={incrementCount}>+1</button>
		</>
	);
}

```

### Svelte
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

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
const count = ref(0);

function incrementCount() {
	count.value = count.value + 1;
}
</script>

<template>
  <p>Counter: {{ count }}</p>
  <button @click="incrementCount">
    +1
  </button>
</template>

```

## Dom ref
### React
```jsx
import { useState, useEffect } from 'react';

export default function PageTitle() {
	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		setPageTitle(document.title);
	});

	return <p>Page title is {pageTitle}</p>;
}

```

### Svelte
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

### Vue 3
```vue
<script setup>
import { ref, onMounted } from 'vue';

const inputElement = ref();

onMounted(() => {
	inputElement.value.focus();
});
</script>

<input ref="inputElement" />

```

## Conditional
### React
```jsx
import { useState, useMemo } from 'react';

const TRAFFIC_LIGHTS = ['red', 'orange', 'green'];

export default function TrafficLight() {
	const [lightIndex, setLightIndex] = useState(0);

	const light = useMemo(() => TRAFFIC_LIGHTS[lightIndex], [lightIndex]);

	function nextLight() {
		if (lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
			setLightIndex(0);
		} else {
			setLightIndex(lightIndex + 1);
		}
	}

	return (
		<>
			<button onClick={nextLight}>Next light</button>
			<p>Light is: {light}</p>
			<p>
				You must
				{light === 'red' && <span>STOP</span>}
				{light === 'orange' && <span>SLOW DOWN</span>}
				{light === 'green' && <span>GO</span>}
			</p>
		</>
	);
}

```

### Svelte
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

### Vue 3
```vue
<script setup>
import { ref, computed } from 'vue';
const TRAFFIC_LIGHTS = ['red', 'orange', 'green'];
const lightIndex = ref(0);

const light = computed(() => TRAFFIC_LIGHTS[lightIndex]);

function nextLight() {
	if (lightIndex.value + 1 > TRAFFIC_LIGHTS.length - 1) {
		lightIndex.value = 0;
	} else {
		lightIndex.value++;
	}
}
</script>

<template>
  <button @click="nextLight">
    Next light
  </button>
  <p>Light is: {{ light }}</p>
  <p>
    You must
    <span v-if="light === 'red'">STOP</span>
    <span v-else-if="light === 'orange'">SLOW DOWN</span>
    <span v-else-if="light === 'green'">GO</span>
  </p>
</template>

```

## Input binding
### React
```jsx
import { useState } from 'react';

export default function InputHello() {
	const [text, setText] = useState('Hello world');

	function handleChange(event) {
		setText(event.target.value);
	}

	return (
		<>
			<p>{text}</p>
			<input value={text} onChange={handleChange} />
		</>
	);
}

```

### Svelte
```svelte
<script>
	let text = 'Hello World';
</script>

<p>{text}</p>

<input bind:value={text} />

```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
const text = ref('Hello World');
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text">
</template>

```

## Event modifier
