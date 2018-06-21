<template>
  <section class="section">
    <h1 class="is-size-4 ">{{ title }} <span><a class="has-text-primary is-size-6">(View All)</a></span></h1>
    <div class="level">
      
      <div v-for="(elements, index) in content" :key="index" class="card has-background-light" style="width:24%!important; border:1px solid grey">
        <div class="card-content">
          <h1 :class="elements.disabled ? disabled : active" class="is-size-3 has-text-weight-semibold" >{{ elements.text }}</h1>
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
