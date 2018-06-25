<template>
  <section class="section">
    <h3 class="title is-3">{{ title }}</h3>
    <div class="level">
      
      <div v-for="(elements, index) in content" :key="index" class="card has-background-light" style="width:24%!important; border:1px solid grey">
        <div class="card-content">
          <div :class="elements.disabled ? disabled : active" class="is-size-3" >{{ elements.text }}</div>
          <a v-show="!(isAuthenticated && !elements.disabled)"
             :disabled="elements.disabled" 
             :class="elements.disabled ? disabled : active" class="is-pulled-right" 
             @click="onclickJoin(elements.disabled)">{{ elements.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: null
    },
    isAuthenticated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: "has-text-grey-dark",
      disabled: "has-text-grey"
    };
  },
  methods: {
    onclickJoin(disabled) {
      if (!disabled) {
        this.$router.push("/signup");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 10rem;
}
</style>
