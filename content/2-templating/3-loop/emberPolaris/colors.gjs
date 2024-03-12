const colors = ["red", "green", "blue"];

<template>
  <ul>
    {{#each colors as |color|}}
      <li>{{color}}</li>
    {{/each}}
  </ul>
</template>