<template>
  <section class="section">
    <h1 class="subtitle">{{ title }} (View All)</h1>
    <div class="level">
      
      <div v-for="(elements, index) in content" :key="index" class="card" style="width:24%!important; border:1px solid white">
        <div class="card-content">
          <h1 class="title">{{ elements.text }}</h1>
          <a class="is-pulled-right">{{ elements.linkText }}</a>
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
  mounted() {
    console.log(this.content[0]);
  }
};
</script>
