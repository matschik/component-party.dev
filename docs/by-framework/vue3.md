# Component Party for Vue 3

# Reactivity
## Declare state
```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
console.log(name.value);
</script>

```

## Update state
```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
name.value = 'Jane';
console.log(name.value);
</script>

```

## Computed state
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

## Watch state
# Templating
## Minimal template
```vue
<template>
  <h1>Hello world</h1>
</template>

```

## Styling
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

## Event click
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

# Lifecycle
## OnMount
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

## OnUnmount
```vue
<script setup>
import { ref, onUnmounted } from 'svelte';

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

# Component composition
## Props
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
# Store context
# Form input
## Input binding
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

# Real usecase
## Todolist
## Fetch
