export tag UserProfile
	prop name = ""
	prop age = null
	prop favouriteColors = []
	prop isAvailable = no	

	<self>
		<p> "My name is {name}!"
		<p> "My age is {age}!"
		<p> "My favourite colors are {favouriteColors.join(", ")}!"
		<p> "I am {isAvailable ? "available" : "not available"}"