<template>
  <div class="menu-item menu-link">
    <router-link :to="route">
      <div class="icons-align">
        <span :class="icon"/>
        <span class="menu-name">{{ name }}</span>
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

<style>
.icons-align {
  display: flex;
  text-align: right;
  align-items: center;
}

.menu-name {
  display: none;
}

.nuxt-link-exact-active {
  color: #85449a;
}

a {
  color: inherit;
}

a:hover {
  color: #85449a;
  border-top: #85449a 1px solid;
}

.prefix {
  text-align: right;
}

@media screen and (min-width: 800px) {
  a {
    width: 100%;
  }
  .prefix {
    text-align: right;
  }
}

@media screen and (min-width: 900px) {
  .prefix {
    width: 50%;
    font-size: 24px;
  }
  .menu-name {
    display: inherit;
    font-size: 14px;
    margin-left: 10px;
    flex-shrink: 0;
  }
}
</style>
