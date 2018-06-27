<template>
  <router-link :to="route">
    <div class="navbar-item level">
      <span class="icon is-large"><i :class="icon" class="fas fa-lg prefix"/></span>
      <span class="is-size-6">{{ name }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.level {
  justify-content: flex-start;
}

.nuxt-link-exact-active {
  color: #42214d;
}

a:hover {
  color: #42214d;
}
</style>
