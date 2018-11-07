<template>
  <li class="m-sm">
    <a :href="href" target="_blank">
      <span class="icon is-small m-r-sm"><i :class="icon" class="fas prefix"/></span>
      <span class="is-size-6">{{ name }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    href: {
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
li a {
  color: #e0e5e9;
}

li a:hover {
  color: white;
}
</style>
