# Reactivity
## Variable assignment
### React
```jsx
import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState(0);
	setName('Jane');

	console.log(name);
}

```

### Svelte
```svelte
<script>
    let name = "John"
    name = "Jane"
    console.log(name)
</script>
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
name.value = 'Jane';
console.log(name.value);
</script>

```

## Computed
### React
```jsx
import { useState, useMemo } from 'react';

export default function DoubleCount() {
	const [count] = useState(0);
	const doubleCount = useMemo(() => count * 2, [count]);
	console.log(doubleCount);
	return <div />;
}

```

### Svelte
```svelte
<script>
    let count = 10
    $: doubleCount = count * 2
    console.log(doubleCount)
</script>

```

### Vue 3
```vue
<script setup>
import { ref, computed } from 'vue';
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
console.log(doubleCount.value);
</script>

<div />

```

