let count = 0

tag Counter
	def increment
		count++
	
	<self>
		<p> "Counter : {count}"
		<button @click=increment> "+1"
