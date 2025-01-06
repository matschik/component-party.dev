export class UsersResponse
	users=null
	error = null
	isLoading = null
	
	constructor
		fetchData()
	
	def fetchData
		isLoading = yes
		try
			const response = await window.fetch("https://randomuser.me/api/?results=3")
			users = (await response.json()).results
		catch e
			users = null
			error = e
		finally
			isLoading = no
			imba.commit!	