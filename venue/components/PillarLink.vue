<template>
  <span class="is-paddingless">
    <a :href="link" :style="name ? { borderTop: '5px solid ' + highlight } : {}" 
       :target="newTab ? '_blank': ''" class="p-l-md p-r-md">
      <span v-if="name" class="title is-size-6 is-paddingless">{{ name }}</span>
      <img v-if="image" :src="image">
    </a>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: undefined
    },
    image: {
      type: String,
      default: undefined
    },
    link: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: true
    },
    newTab: {
      type: Boolean,
      default: true
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
