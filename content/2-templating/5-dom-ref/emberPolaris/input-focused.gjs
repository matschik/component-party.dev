import { modifier } from "ember-modifier";

const autofocus = modifier((element) => element.focus());

<template>
  <input {{autofocus}} />
</template>