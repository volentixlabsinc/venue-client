<template>
  <div class="panel">
    <h2 class="panel-heading">{{ title }}</h2>
    <div id="content" class="panel-block">
      <div>
        <div>{{ description }}</div>
        <span v-if="comingSoon" class="tag is-warning m-t-md">Coming Soon</span>
      </div>
    </div>
     
    <div class="panel-block">
      <a :href="href" :disabled="comingSoon" class="button is-fullwidth is-primary">{{ button }}</a>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    button: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    comingSoon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
#content {
  height: 8em;
}
</style>
