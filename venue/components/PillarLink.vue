<template>
  <span class="is-paddingless">
    <a :href="link" :style="{ borderBottom: '5px solid ' + highlight, borderTop: '5px solid ' + highlight }" 
       class="p-l-md p-r-md" target="_blank">
      <span class="title is-size-6 is-paddingless">{{ name }}</span>
    </a>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  margin: 0 5px;
  vertical-align: middle;
}

span.title:hover {
  border-bottom: 2px solid #f87351;
}
</style>
