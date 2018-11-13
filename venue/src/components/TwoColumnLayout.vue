<template>
  <div class="columns">
    <div class="column">
      <slot name="left"/>
    </div>
    <div class="column is-5">
      <slot name="right"/>
    </div>
  </div>
</template>

<style scoped>
.column {
  margin: 3em 1em;
}
</style>
