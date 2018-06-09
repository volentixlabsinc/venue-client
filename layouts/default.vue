<template>
  <div id="app">
    <div class="top-left">
      <tokens />
    </div>
    
    <div class="nav-bar">
        <navbar/>
    </div>
    <div class="main"> 
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import navbar from '~/components/navbar/index.vue';
  import tokens from '~/components/tokens/index.vue';
  import { readFromCookie } from '~/services/utils/browser-storage'; 

export default {
  name: 'app',
  data () {
    return  {
      logIn: false
    }
  },
  mounted() {
    readFromCookie(); 
  },
  
  components: {
    navbar,
    tokens
  }
}  
</script>

<style lang="scss" scoped>

/* Start default styling */
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* End default styling */

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

.nav-bar{
 width: 100%;
 height: 7%;
  order: 4;
  background-color: #494B5E;
  align-self: flex-end;
  position: fixed;
  z-index: 500;
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

@media only screen and (min-width: 800px) {
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

.main{
    padding-top: 0;
    padding-left: 20px;
    order: 3;
    grid-area: main;
    height: 100%;
    width:82%;
    z-index: 2;
  }
}

@media only screen and (min-width: 900px) {
   #venue-logo {
  max-height: 25px;
  margin: 10px;
  }
}
@media only screen and (min-width: 1000px) {
   #venue-logo {
  max-height: 40px;
  }
}

</style>
