const colors = [
	{id:1,text:"red"},
	{id:2,text:"blue"},
	{id:3,text:"green"},
	{id:4,text:"gray",isDisabled:yes}
]

let selectedColorId = 2

tag ColorSelect
	<self>
		<select bind=selectedColorId> for color in colors
			<option value=color.id disabled=color.isDisabled> color.text