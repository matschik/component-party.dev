tag Time
	def mount   do #interval = setInterval(render.bind(self),1000)
	def unmount do clearInterval(#interval)
	def render  do <self> 
		<p> "Current time : {(new Date).toLocaleString!}"

imba.mount do
	<Time>