import { useState } from 'react';

export default function Name() {
	const [name, setName] = useState("John");
	setName('Jane');

	console.log(name);
}
