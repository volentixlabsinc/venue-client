<template>
  <div class="menu-item menu-link m-md">
    <router-link :to="route">
      <div class="level">
        <span class="icon is-large level-left"><i :class="icon" class="fa-2x"/></span>
        <span class="is-size-6 is-pulled-left level-right">{{ name }}</span>
      </div>
    </router-link>
  </div>
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
  color: #85449a;
}

a {
  color: #e6d9ea;
}

a:hover {
  color: #85449a;
}
</style>
