<template>
  <router-link :to="route" class="navbar-item">
    <div class="level">
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
.nuxt-link-exact-active {
  color: white;
  background-color: #374a59;
}
</style>
