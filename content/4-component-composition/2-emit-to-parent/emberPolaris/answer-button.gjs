import { on } from "@ember/modifier";

<template>
  <button {{on "click" @onYes}}> YES </button>
  <button {{on "click" @onNo}}> NO </button>
</template>