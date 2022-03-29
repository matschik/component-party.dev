# Vue VS Svelte

## Component state

### Variable réactive, get, set

Vue

```jsx
const name = ref('John');
name.value = 'Jane';
```

Svelte

```jsx
let name = 'John';
name = 'Jane';
```

React

```jsx
const [name, setName] = useState(0);
setName('Jane');
```

### Computed

Vue

```jsx
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
```

Svelte

```jsx
let count = 10;
$: doubleCount = count * 2;
```

React

```jsx
const [count, setCount] = useState(0);
const doubleCount = useMemo(() => count * 2, [count]);
```

## Lifecycle

## Templating

### Hello world

Vue

```jsx
// HelloWorld.vue
<template>
	<h1>Hello world</h1>
</template>
```

Svelte

```jsx
// HelloWorld.svelte
<h1>Hello world</h1>
```

React

```jsx
// HelloWorld.jsx
export default function HelloWorld() {
	return <h1>Hello world</h1>;
}
```

### Variable

Vue

```jsx
<script setup>
	const username = "John"
</script>

<template>
	<h1>My name is {{username}}</h1>
</template>
```

Svelte

```jsx
<script>
	const username = "John"
</script>

<h1>My name is {{username}}</h1>
```

React

```jsx
export default function HelloUser() {
	const username = 'John';
	return <h1>My name is {username}</h1>;
}
```

## CSS

### Styling scoped

Vue

```jsx
<template>
	<h1 class="title">Hello world</h1>
	<button style="font-size: 10rem;">Click here</button>
</template>

<style scoped>
	.title {
		color: red;
	}
</style>
```

Svelte

```jsx
<h1 class="title">Hello world</h1>
<button style="font-size: 10rem;">Click here</button>

<style>
	.title {
		color: red;
	}
</style>
```

React (class???)

```jsx
export default function HelloWorld() {
	return (
    <>
	    <h1 className="title">Hello world</h1>
	    <button style={{font-size: "10rem"}}>Click here</button>
    </>
  )
}
```

### Conditional classes

### DOM reference
