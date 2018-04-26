<template>
<div>
  <div 
  id="app">
  <div class="logo">
    <img src="/img/logos/solo_White-logo.png"/>
  </div>
  <div class="tokens">
    <tokens/>
  </div>
  <div class="nav-bar">
      <navbar/>
  </div>
    <div class="main">
      <router-view/>
    </div>
    </div>
</div>
</template>

<script>
import navbar from './common/navbar.vue';
import tokens from './common/tokens.vue';

export default {
  name: 'app',
  
  components: {
    navbar,
    tokens
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #222C3B;
  flex-wrap: wrap;
}
.main {
  order: 3;
  background-image: linear-gradient(to bottom,  #222C3B, #222C3B, #61396e , #222C3B);
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70%;
}
img {
  max-height: 20px;
  padding-top: 30px;
  padding-left: 15px;
}
.logo {
  height: 20%;
  width: 50%;
  order: 1;
  background-color: #222C3B;
  box-shadow: -5px 1px 5px black;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.tokens {
  height: 20%;
  order:2;
  width: 50%;
  box-shadow: -5px 1px 5px black;
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
.nav-bar{
 width: 100%;
 height: 7%;
  order: 4;
  background-color: white;
  opacity: 0.8;
  align-self: flex-end;
}

@media only screen and (min-width: 500px) {
  #app {
    flex-direction: column;;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .nav-bar{
  order:2;
   height: 70%;
   width: 15%;
   align-self: center;
  background-color: #222C3B;
  opacity: 1;
  }

  .main{
    order: 3;
    grid-area: main;
    height: 100%;
    width:70%;
    z-index: 2;
    box-shadow: 1px 1px 5px black, -1px -1px 5px black;
  }

  .logo {
  order:1;
   height: 30%;
   width: 15%;
  align-self: flex-start;
  box-shadow: 0px 0px 0px black;
  }

  .tokens {
    order:4;
    height: 100%;
    width: 15%;
    font-size: 23px;
  }
}

@media only screen and (min-width: 700px) {
   img {
  max-height: 25px;
  }
}
@media only screen and (min-width: 900px) {
   img {
  max-height: 30px;
  }
}
</style>
