# Component Party for Vue 3

# Reactivity
## Variable assignment
```vue
<script setup>
import { ref } from 'vue';
const name = ref('John');
name.value = 'Jane';
console.log(name.value);
</script>

```

## Computed
```vue
<script setup>
import { ref, computed } from 'vue';
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
console.log(doubleCount.value);
</script>

<div />

```

# Templating
## Minimal
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

## Event modifier
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

## Watcher
# Component composition
## Props
```vue
<script setup>
import { ref } from 'vue';
import Hello from './Hello.vue';

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
# Store context
# Form inputs
# Real usecase
## Todolist
## Fetch
