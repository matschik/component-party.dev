<script>
export default {
  data() {
    return {
      TRAFFIC_LIGHTS: ["red", "orange", "green"],
      lightIndex: 0,
    };
  },
  computed: {
    light() {
      return this.TRAFFIC_LIGHTS[this.lightIndex];
    },
  },
  methods: {
    nextLight() {
      this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
    },
  },
};
</script>

<template>
  <div>
    <button @click="nextLight">Next light</button>
    <p>Light is: {{ light }}</p>
    <p>
      You must
      <span v-if="light === 'red'">STOP</span>
      <span v-else-if="light === 'orange'">SLOW DOWN</span>
      <span v-else-if="light === 'green'">GO</span>
    </p>
  </div>
</template>
