<template>
<div class="tokens-template">
    <p>{{myTotalTokens}} vtx</p>
</div>
</template>

<script>
export default {
  name: 'app',
  props: {
    logIn : {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myTotalTokens: 1240
    }
  },
}
</script>


<style scoped>
.tokens-template {
  padding: 20px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
p {
  flex-grow: 0;
  margin: 0px;
  padding-left:10px;
}

@media only screen and (min-width: 600px) {
.tokens-template {
  padding: 0px;
  font-size: 18px;
  font-weight:lighter;
  justify-content: center;
align-items: center;
}
p {
  flex-grow: 0;
  margin: 0px;
  padding-left:5px;
  letter-spacing: 1.2px;
}
}
</style>
