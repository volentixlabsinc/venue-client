<template>
  <div class="columns">
    <div class="column is-text-centered">
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped>
.column {
  margin: 1em;
  justify-content: center;
  align-items: center;
}
</style>
