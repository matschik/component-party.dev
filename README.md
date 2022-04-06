# Component Party

[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/matschik/component-party)

> Web component JS frameworks quick overview by their syntax and features

## Why ?

Many JS developers don't have a good overview of every existing JS framework with their own syntax and features.
How do we solve this ? Developers love having framework overview by examples. It's a quick introduction before going deeper.

## Roadmap

- [ ] Website (built with Astro)
- [ ] Add SolidJS support
- [ ] Add Angular support
- [ ] Add Preact support
- [ ] Add Alpine support
- [x] Add React support
- [x] Add Svelte support
- [x] Add Vue 3 support

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

---

# Documentation


## Reactivity
### Declare state
#### React
```jsx
import { useState } from 'react';

export default function Name() {
	const [name] = useState('John');
	console.log(name);
}

```

#### Svelte
```svelte
<script>
	let name = 'John';
	console.log(name);
</script>

```

#### Vue 3
```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
console.log(name.value);
</script>

```

### Update state
#### React
```jsx
import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState('John');
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

### Computed state
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

<template>
  <div />
</template>

```


## Templating
### Minimal template
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

### Loop
#### React
```jsx
export default function Colors() {
	const colors = ['red', 'green', 'blue'];
	return (
		<ul>
			{colors.map((color) => (
				<li key={color}>{color}</li>
			))}
		</ul>
	);
}

```

#### Svelte
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

#### Vue 3
```vue
<script setup>
const colors = ['red', 'green', 'blue'];
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
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
  <button @click="incrementCount">
    +1
  </button>
</template>

```

### Dom ref
#### React
```jsx
import { useEffect, useRef } from 'react';

export default function InputFocused() {
	const inputElement = useRef(null);

	useEffect(() => inputElement.current.focus());

	return <input type="text" ref={inputElement} />;
}

```

#### Svelte
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

#### Vue 3
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

### Conditional
#### React
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

#### Svelte
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

#### Vue 3
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


## Lifecycle
### On mount
#### React
```jsx
import { useState, useEffect } from 'react';

export default function PageTitle() {
	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		setPageTitle(document.title);
	});

	return <p>Page title: {pageTitle}</p>;
}

```

#### Svelte
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

#### Vue 3
```vue
<script setup>
import { ref, onMounted } from 'vue';
const pageTitle = ref('');
onMounted(() => {
	pageTitle.value = document.title;
});
</script>

<template>
  <p>Page title: {{ pageTitle }}</p>
</template>

```

### On unmount
#### React
```jsx
import { useState, useEffect } from 'react';

export default function Time() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const timer = setInterval(() => {
		setTime(new Date().toLocaleTimeString());
	}, 1000);

	useEffect(() => {
		return () => {
			clearInterval(timer);
		};
	});

	return <p>Current time: {time}</p>;
}

```

#### Svelte
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

#### Vue 3
```vue
<script setup>
import { ref, onUnmounted } from 'vue';

const time = ref(new Date().toLocaleTimeString());

const timer = setInterval(() => {
	time.value = new Date().toLocaleTimeString();
}, 1000);

onUnmounted(() => {
	clearInterval(timer);
});
</script>

<p>Current time: {time}</p>

```


## Component composition
### Props
#### React
```jsx
import UserProfile from './UserProfile.jsx';

export default function App() {
	return <UserProfile name="John" age={20} favouriteColors={['green', 'blue', 'red']} isAvailable />;
}

```

```jsx
import PropTypes from 'prop-types';

export default function UserProfile({ name = '', age = null, favouriteColors = [], isAvailable = false }) {
	return (
		<>
			<p>My name is {name} !</p>
			<p>My age is {age} !</p>
			<p>My favourite colors are {favouriteColors.split(', ')} !</p>
			<p>I am {isAvailable ? 'available' : 'not available'}</p>
		</>
	);
}

UserProfile.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
	isAvailable: PropTypes.bool.isRequired,
};

```

#### Svelte
```svelte
<script>
	import UserProfile from './UserProfile.svelte';
</script>

<UserProfile name="John" age={20} favouriteColors={['green', 'blue', 'red']} isAvailable />

```

```svelte
<script>
	export let name = '';
	export let age = null;
	export let favouriteColors = [];
	export let isAvailable = false;
</script>

<p>My name is {name} !</p>
<p>My age is {age} !</p>
<p>My favourite colors are {favouriteColors.split(', ')} !</p>
<p>I am {isAvailable ? 'available' : 'not available'}</p>

```

#### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import Hello from './UserProfile.vue';

const username = ref('John');
</script>

<template>
  <input v-model="username">
  <Hello :name="username" />
</template>

```

```vue
<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true,
		default: '',
	},
	age: {
		type: Number,
		required: true,
		default: null,
	},
	favouriteColors: {
		type: Array,
		required: true,
		default: () => [],
	},
	isAvailable: {
		type: Boolean,
		required: true,
		default: false,
	},
});
</script>

<template>
  <p>My name is {{ props.name }} !</p>
  <p>My age is {{ props.age }} !</p>
  <p>My favourite colors are {{ props.favouriteColors.split(', ') }} !</p>
  <p>I am {{ props.isAvailable ? 'available' : 'not available' }}</p>
</template>

```


## Form input
### Input binding
#### React
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

#### Svelte
```svelte
<script>
	let text = 'Hello World';
</script>

<p>{text}</p>
<input bind:value={text} />

```

#### Vue 3
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


## Webapp features
### Routing
#### React
```
|-- pages/
    |-- index.js // index page "/"
    |-- about.js // about page "/about"
    |-- 404.js // handle error HTTP 404 page not found
    |-- 500.js // handle error HTTP 500
    |-- _app.js // global app layout
```

https://remix.run/docs/en/v1/guides/routing

#### Svelte
```
|-- routes/
    |-- index.svelte // index page "/"
    |-- about.svelte // about page "/about"
    |-- __error.svelte // handle HTTP errors 404, 500,...
    |-- __layout.svelte // global app layout
```

#### Vue 3
```
|-- pages/
    |-- index.vue // index page "/"
    |-- about.vue // about page "/about"
```


