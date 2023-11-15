<script>
  const TRAFFIC_LIGHTS = ["red", "orange", "green"];
  let lightIndex = $state(0);

  const light = $derived(TRAFFIC_LIGHTS[lightIndex]);

  function nextLight() {
    lightIndex = (lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
</script>

<button onclick={nextLight}>Next light</button>
<p>Light is: {light}</p>
<p>
  You must
  {#if light === "red"}
    <span>STOP</span>
  {:else if light === "orange"}
    <span>SLOW DOWN</span>
  {:else if light === "green"}
    <span>GO</span>
  {/if}
</p>
