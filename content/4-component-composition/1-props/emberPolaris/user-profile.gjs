const join = (list) => list.join(', ');

<template>
  <p>My name is {{@name}}!</p>
  <p>My age is {{@age}}!</p>
  <p>My favourite colors are {{join @favouriteColors}}!</p>
  <p>I am {{if @isAvailable "available" "not available"}}</p>
</template>