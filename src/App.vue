<template>
<div>
  <div 
  id="app">
  <div class="top-left">

    <tokens />

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

import { readFromCookie } from './service/utils/browser-storage'; 

export default {
  name: 'app',
  data () {
    return  {
      logIn: false
    }
  },
  mounted(){
    readFromCookie(); 
    
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
  min-height: 50%;
  position: relative;
  padding-top: 18%;
  overflow: hidden;

}

.top-left {
  height: 10%;
  width: 100%;
  order: 1;
  box-shadow: 0px 2px 10px #1d2430;
  z-index: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  background-color: #494B5E;
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
  position: fixed;
  z-index: 500;
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
   height: 70%;
   width: 15%;
   align-self: center;
  background-color: transparent;
  opacity: 1;
  position: relative;
  }

  .main{
    padding-top: 0;
    padding-left: 20px;
    order: 3;
    grid-area: main;
    height: 100%;
    width:82%;
    z-index: 2;
    
  }

  .top-left {
  order:1;
   height: 30%;
   width: 15%;
  align-self: flex-start;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-end;
  box-shadow: 0px 0px 0px black;
  position: relative;
  background-color: transparent;
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
  max-height: 25px;
  margin: 10px;
  }
}
@media only screen and (min-width: 900px) {
   #venue-logo {
  max-height: 40px;
  }
}
</style>
