# Component composition

## Props

### React

```jsx
import { useState } from 'react';
import Hello from './Hello.jsx';

export default function App() {
	const [username, setUsername] = useState('John');

	function handleChange(event) {
		setUsername(event.target.value);
	}

	return (
		<>
			<input value={username} onChange={handleChange} />
			<Hello name={username} />
		</>
	);
}
```

```jsx
import PropTypes from 'prop-types';

export default function Hello({ name }) {
	return <p>Hello {name} !</p>;
}
Hello.propTypes = {
	name: PropTypes.string.isRequired
};
```

### Svelte

```svelte
<script>
	import Hello from './Hello.svelte';
	let username = 'John';
</script>

<input bind:value={username} />

<Hello name={username} />
```

```svelte
<script>
	let name;
</script>

<p>Hello {name} !</p>
```

### Vue 3

```vue
<script setup>
import { ref } from 'vue';
import Hello from './Hello.vue';

const username = ref('John');
</script>

<template>
	<input v-model="username" />
	<Hello :name="username" />
</template>
```

```vue
<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	}
});
</script>

<template>
	<p>Hello {{ props.name }} !</p>
</template>
```

## Event

## Slot

## Slot named

## Slot props

## Event dom forwarding
