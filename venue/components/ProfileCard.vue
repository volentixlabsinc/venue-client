<template>
  <div class="card">
    <header class="card-header">
      <h2 class="card-header-title">{{ title }}</h2>
    </header>
    <div id="content" class="panel-block">
      <div>
        <div>{{ description }}</div>
      </div>
    </div>
     
    <footer class="card-footer">
      <a v-if="!comingSoon" class="card-footer-item" @click="$emit('clicked')">{{ button }}
        <span class="icon p-l-sm"><i class="fas fa-edit"/></span>
      </a>
      <div v-else class="card-footer-item" >
        <span v-if="comingSoon" class="tag">Coming Soon</span>
      </div>
    </footer> 
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
    comingSoon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
#content {
  height: 6rem;
}
</style>
