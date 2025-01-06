let pageTitle = ""

tag PageTitle
	def mount
		pageTitle = document.title

	<self>
		<p> "Page Title: {pageTitle}"		