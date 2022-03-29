# Component Party

## Reactivity

### Variable assignment

#### React

```jsx
import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState(0);
	setName('Jane');

	console.log(name);
}
```

#### Svelte

```svelte
<script>
	let name = 'John';
	name = 'Jane';
	console.log(name);
</script>
```

#### Vue 3

```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
name.value = 'Jane';
console.log(name.value);
</script>
```

### Computed

#### React

```jsx
import { useState, useMemo } from 'react';

export default function DoubleCount() {
	const [count] = useState(0);
	const doubleCount = useMemo(() => count * 2, [count]);
	console.log(doubleCount);
	return <div />;
}
```

#### Svelte

```svelte
<script>
	let count = 10;
	$: doubleCount = count * 2;
	console.log(doubleCount);
</script>
```

#### Vue 3

```vue
<script setup>
import { ref, computed } from 'vue';
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
console.log(doubleCount.value);
</script>

<div />
```

## Templating

### Minimal

#### React

```jsx
export default function HelloWorld() {
	return <h1>Hello world</h1>;
}
```

#### Svelte

```svelte
<h1>Hello world</h1>
```

#### Vue 3

```vue
<template>
	<h1>Hello world</h1>
</template>
```

### Styling

#### React

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

#### Svelte

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

#### Vue 3

```vue
<template>
	<h1 class="title">Hello world</h1>
	<button style="font-size: 10rem">I am a button</button>
</template>

<style scoped>
.title {
	color: red;
}
</style>
```

### Loop

#### React

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

#### Svelte

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

#### Vue 3

```vue
<script setup>
const countries = ['France', 'United States', 'Spain'];
</script>

<template>
	<ul>
		<li v-for="country in countries" :key="country">
			{{ country }}
		</li>
	</ul>
</template>
```

### Event click

#### React

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

#### Svelte

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

#### Vue 3

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
	<button @click="incrementCount">+1</button>
</template>
```

### Dom ref

### Conditional

### Input binding

### Event modifier

## Lifecycle

### OnMount

### OnUnmount

### Watcher

## Component composition

### Props

### Event

### Slot

### Slot named

### Slot props

### Event dom forwarding

## Store context

## Form inputs

## Real usecase

### Todolist

### Fetch
