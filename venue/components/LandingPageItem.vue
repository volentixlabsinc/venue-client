<template>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <div class="title is-5">{{ name }}</div>
      <a v-if="link" class="button is-primary" @click="$router.push(link)">{{ info }}</a>
      <div v-else class="subtitle">{{ info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>
.is-parent {
  min-height: 10rem;
}
</style>
