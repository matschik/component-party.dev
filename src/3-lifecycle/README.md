# Lifecycle
## On mount
### React
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

### Svelte
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

### Vue 3
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

## On unmount
### React
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

### Svelte
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

### Vue 3
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

