<template>
  <div id="app" class="columns">
    <div id="navigation" class="column is-one-fifth">
      <div>
        <tokens class="m-md"/>
        <navbar/>
      </div>
    </div>
    <div class="column"> 
      <nuxt/>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar/index.vue";
import tokens from "~/components/tokens/index.vue";

export default {
  components: {
    navbar,
    tokens
  }
};
</script>

<style lang="scss" scoped>
#navigation {
  background-color: #e6d9ea;
  height: 100vh;
}
</style>
