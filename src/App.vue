<template>
<div>
  <div 
  id="app">
  <div class="top-left">
    <div class="top-left-container">
    <img id="venue-logo" src="/img/logos/solo_White-logo.png"/>
    <img id="token-icon" src="/img/logos/VTX-Token-icon_B&W2.png"/>
    <tokens />
    </div>
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
import navbar from './common/navbar/index.vue';
import tokens from './common/tokens/index.vue';

export default {
  name: 'app',
  data () {
    return  {
      logIn: false
    }
  },
  
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
  justify-content: center;
  background-color: #2E2E3F;
  background-image: linear-gradient(to top,  #222C3B, #494B5E);
  flex-wrap: wrap;
}
.main {
  order: 3;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 75%;
}
#venue-logo {
  max-height: 20px;
  margin: 20px;
}
.top-left {
  height: 18%;
  width: 100%;
  order: 1;
  box-shadow: 0px 2px 10px #1d2430;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.top-left-container{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
}

#token-icon{
  height: 12%;
  position:absolute; 
  top:11%;
  left:40%;
}
.fa-adjust{
  padding-right: 5px;
  color: #ffdc13;
}
.nav-bar{
 width: 100%;
 height: 7%;
  order: 4;
  background-color: #494B5E;
  align-self: flex-end;
}

@media only screen and (min-width: 600px) {
  #app {
    flex-direction: column;;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .nav-bar{
  order:2;
   height: 77%;
   width: 15%;
   align-self: center;
  background-color: transparent;
  opacity: 1;
  }

  .main{
    padding-left: 20px;
    order: 3;
    grid-area: main;
    height: 100%;
    width:82%;
    z-index: 2;
    
  }

  .top-left {
  order:1;
   height: 23%;
   width: 15%;
  align-self: flex-start;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-end;
  box-shadow: 0px 0px 0px black;
  }

  .top-left-container{
    display: flex;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

  #token-icon{
    padding-top: 10px;
  height: 70px;
  position: inherit;; 
  order:-1;
}

}

@media only screen and (min-width: 700px) {
   #venue-logo {
  max-height: 22px;
  margin: 10px;
  }
}
@media only screen and (min-width: 900px) {
   #venue-logo {
  max-height: 27px;
  }
}
</style>
