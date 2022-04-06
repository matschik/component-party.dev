import { useState } from 'react';

export default function Name() {
	const [name] = useState('John');
	console.log(name);
}
