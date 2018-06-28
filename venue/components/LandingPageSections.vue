<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-left" >
        <h3 class="title is-3">{{ title }}</h3>
        <div class="row">
          <div v-for="(elements, index) in content" :key="index" class="col-lg-3 col-md-6 col-sm-12 text-center card has-background-light" style="width:24%!important; border:1px solid grey"> 
            {{ elements.text }}
          </div>
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
