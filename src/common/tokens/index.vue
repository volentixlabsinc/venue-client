<template>
<div class="tokens-template">
    <i class="fas fa-adjust"></i>
    <p>{{myTotalTokens}}</p>
</div>
</template>

<script>
export default {
  name: 'app',
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
  height: 100%;
  width: 100%;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 5px black;
  display: flex;
  justify-content: flex-end;
}
p {
  flex-grow: 0;
  margin: 0px;
  padding-top: 30px;
  padding-right:15px;
}
.fa-adjust{
  flex-grow: 0;
  margin: 0px;
  padding-top: 33px;
  padding-right: 5px;
  color: #ffdc13;
}
@media only screen and (min-width: 500px) {
    .tokens-template {
      font-size: 25px;
}
}
</style>
