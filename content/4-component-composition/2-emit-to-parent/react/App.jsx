import { useState } from 'react';
import AnswerButton from './AnswerButton.jsx';

export default function App() {
	const [canCome, setCanCome] = useState(true);

	function onAnswerNo() {
		setCanCome(false);
	}

	function onAnswerYes() {
		setCanCome(true);
	}

	return (
		<>
			<p>Can I come ?</p>
			<AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
			<p style="font-size: 50px;">{canCome ? '😀' : '😥'}</p>
		</>
	);
}
