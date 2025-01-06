import {UsersResponse} from './fetchData.imba'

const responseData = new UsersResponse

tag App
	
	<self>
		<p> "Fetching users..." if responseData.isLoading
		<p> "An error occurred while fetching users" if responseData.error
		if responseData.users
			<ul> for user in responseData.users
				<li> 
					<img src=user.picture.thumbnail alt="user">
					<p> "{user.name.first} {user.name.last}"					
	