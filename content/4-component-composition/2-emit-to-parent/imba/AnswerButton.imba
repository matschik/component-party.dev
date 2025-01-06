export tag AnswerButton

	<self>
		<button @click.emit("yes")> "YES"
		<button @click.emit("no")> "NO"