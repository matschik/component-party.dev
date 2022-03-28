export default function Countries(){
	const countries = [
		"France",
		"United States",
		"Spain"
	]
	return (
		<ul>
			{countries.map(country => <li>{country}</li>)}
		</ul>
	)
}