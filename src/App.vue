<template>
<div>
  <div 
  id="app">
  <div class="logo">
    logo
  </div>
  <div class="tokens">
    tokens
  </div>
  <div class="buttons">
      <button class="btn"></button>
      <button class="btn"></button>
      <button class="btn"></button>
      <button class="btn"></button>
  </div>
    <div class="main">
      <router-view/>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logged: false
    }
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
  background: #413D54;
  flex-wrap: wrap;
}
.main {
  order: 3;
  background: #413D54;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70%;
}

.logo {
  height: 20%;
  width: 50%;
  order: 1;
  background-color: #413D54;
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
}

.buttons{
 width: 100%;
 height: 7%;
  order: 4;
  background-color: white;
  opacity: 0.5;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
}

@media only screen and (min-width: 800px) {
  #app {
    flex-direction: column;;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .buttons{
  order:2;
   flex-direction: column;
   height: 50%;
   width: 15%;
   align-self: center;
    background-color: #413D54;
    justify-content: flex-start;
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
   height: 50%;
   width: 15%;
  align-self: flex-start;
  box-shadow: 0px 0px 0px black;
  }

  .tokens {
    order:4;
    height: 100%;
    width: 15%;
  }
}

</style>
