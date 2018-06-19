<template>
  <section class="section">
    <h1 class="subtitle">{{ title }} <span><a class="has-text-primary">(<u> View All </u>)</a></span></h1>
    <div class="level">
      
      <div v-for="(elements, index) in content" :key="index" class="card has-background-light" style="width:24%!important; border:1px solid grey">
        <div class="card-content">
          <h1 :class="elements.linkText=='Coming Soon' ? disabled : active" class="title" >{{ elements.text }}</h1>
          <a :disabled="elements.linkText=='Coming Soon'" :class="elements.linkText=='Coming Soon' ? disabled : active" class="is-pulled-right" @click="onclickJoin(elements.linkText)">{{ elements.linkText }}</a>
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
    }
  },
  data() {
    return {
      active: "has-text-grey-dark",
      disabled: "has-text-grey"
    };
  },
  methods: {
    onclickJoin(e) {
      if (e == "Join") {
        this.$router.push("/signup");
      }
    }
  }
};
</script>
