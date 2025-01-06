let picked = "red"

tag PickPill
	<self>
		<div> "Picked: {picked}"  

		<input html:id="blue-pill" type="radio" value="blue" bind=picked>
		<label html:for="blue-pill"> "Blue"

		<input html:id="red-pill" type="radio" value="red" bind=picked>
		<label html:for="red-pill"> "Red"