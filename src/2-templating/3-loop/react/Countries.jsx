export default function Countries() {
	const countries = ['France', 'United States', 'Spain'];
	return (
		<ul>
			{countries.map((country) => (
				<li key={country}>{country}</li>
			))}
		</ul>
	);
}
