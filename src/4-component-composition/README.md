# Component composition
## Props
### React
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
	isAvailable: PropTypes.bool.isRequired
};

```

### Svelte
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

### Vue 3
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
		default: ""
	},
	age: {
		type: Number,
		required: true,
		default: null
	},
	favouriteColors: {
		type: Array,
		required: true,
		default: () => []
	},
	isAvailable: {
		type: Boolean,
		required: true,
		default: false
	}
});
</script>

<template>
  <p>My name is {{ props.name }} !</p>
  <p>My age is {{ props.age }} !</p>
  <p>My favourite colors are {{ props.favouriteColors.split(', ') }} !</p>
  <p>I am {{ props.isAvailable ? 'available' : 'not available' }}</p>
</template>
```

## Event custom
## Slot
## Slot named
## Slot props
## Event dom forwarding
