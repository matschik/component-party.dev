const TRAFFIC_LIGHTS = ["red", "orange", "green"]
let lightIndex = 0

tag TrafficLight

	get light
		TRAFFIC_LIGHTS[lightIndex]

	def nextLight
		lightIndex = (lightIndex + 1) % TRAFFIC_LIGHTS.length

	<self>
		<button @click=nextLight> "Next Light"
		<p> "Light is : {light}"
		<p> "You must "
			<span> "Stop" if light is "red"
			<span> "Slow down" if light is "orange"
			<span> "Go" if light is "green"		
   