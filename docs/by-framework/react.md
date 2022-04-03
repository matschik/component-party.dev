# Component Party for React

# Reactivity
## Variable assignment
```jsx
import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState(0);
	setName('Jane');

	console.log(name);
}

```

## Computed
```jsx
import { useState, useMemo } from 'react';

export default function DoubleCount() {
	const [count] = useState(0);
	const doubleCount = useMemo(() => count * 2, [count]);
	console.log(doubleCount);
	return <div />;
}

```

# Templating
## Minimal
```jsx
export default function HelloWorld() {
	return <h1>Hello world</h1>;
}

```

## Styling
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

## Loop
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

## Event click
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

## Dom ref
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

## Conditional
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

## Input binding
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

## Event modifier
# Lifecycle
## OnMount
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

## OnUnmount
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

## Watcher
# Component composition
## Props
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
