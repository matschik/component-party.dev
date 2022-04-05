# Component Party for React

# Reactivity
## Declare state
```jsx
import { useState } from 'react';

export default function Name() {
	const [name] = useState("John");
	console.log(name);
}

```

## Update state
```jsx
import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState("John");
	setName('Jane');

	console.log(name);
}

```

## Computed state
```jsx
import { useState, useMemo } from 'react';

export default function DoubleCount() {
	const [count] = useState(0);
	const doubleCount = useMemo(() => count * 2, [count]);
	console.log(doubleCount);
	return <div />;
}

```

## Watch state
# Templating
## Minimal template
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
import { useEffect, useRef } from 'react';

export default function InputFocused() {
	const inputElement = useRef(null);

	useEffect(() => inputElement.current.focus())

	return <input type="text" ref={inputElement} />;
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

# Component composition
## Props
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

## Event custom
## Slot
## Slot named
## Slot props
## Event dom forwarding
# Store context
# Form input
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

# Real usecase
## Todolist
## Fetch
