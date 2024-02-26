<template>
  <button>
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      <span>No content found</span>
    {{/if}}
  </button>
</template>