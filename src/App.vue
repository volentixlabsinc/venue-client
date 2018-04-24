<template>
  <div id="app">
    <div class="login-card">
      <h1>Welcome to VENUE</h1>
      <h1>Here goes your logIn module</h1>
    </div>
    <div class="campaign-card">
      <h1>Here goes your campaign module</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  text-align: center;
  background-color: #222C3B;
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
}

.login-card {
  width:100%;
  height: 70%;
  background-color: 222C3B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white
}

.campaign-card {
  width:100%;
  height: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}



@media only screen and (min-width: 800px) {
  .login-card {
  width:70%;
  background-color: whitesmoke;
  opacity: 0.3;
  color: black;
}

  .campaign-card {
  width:70%;
}
}
</style>
