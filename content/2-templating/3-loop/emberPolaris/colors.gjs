import { array } from "@ember/helper";

<template>
  <ul>
    {{#each (array "red" "green" "blue") as |color|}}
      <li>{{color}}</li>
    {{/each}}
  </ul>
</template>