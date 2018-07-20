<template>
  <router-link :to="route" class="navbar-item">
    <div class="level" @click="$emit('click')">
      <span class="icon is-large"><i :class="icon" class="fas fa-lg prefix"/></span>
      <span class="nav-text is-size-6">{{ name }}</span>
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
.navbar-item {
  padding-left: 12px;
}

.nuxt-link-exact-active {
  color: white;
  background-color: #374a59;
  border-left: 5px #84429a solid;
  padding-left: 7px;
}

.nav-text {
  text-transform: uppercase;
}
</style>
