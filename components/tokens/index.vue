<template>
  <div class="tokens-template">
    <div class="top-left-container">
      <img id="token-icon" src="/img/logos/VTX-Token-icon.eps">

      <a class="venue-logo" @click="onClickLogo">
        <img id="venue-logo" src="/img/logos/venue-volentix-dark.png">
      </a>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    logIn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      myTotalTokens: null
    };
  },
  methods: {
    onClickLogo() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.tokens-template {
  width: 100%;
  padding: 20px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
p {
  flex-grow: 0;
  margin: 0px;
  padding-left: 10px;
}
.venue-logo,
.VTX {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
#venue-logo {
  max-height: 40px;
}

.top-left-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
}

#token-icon {
  height: 80px;
  position: absolute;
  bottom: -25px;
  left: 42%;
  display: none;
}
.fa-adjust {
  padding-right: 5px;
  color: #ffdc13;
}

@media only screen and (min-width: 800px) {
  .tokens-template {
    padding: 0px;
    font-size: 18px;
    font-weight: lighter;
    justify-content: center;
    align-items: center;
  }

  .top-left-container {
    display: flex;
    width: auto;
    height: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
  }
  .venue-logo,
  .VTX {
    width: 100%;
    align-items: center;
  }
  #venue-logo {
    max-height: 22px;
    margin: 10px;
  }
  p {
    flex-grow: 0;
    margin: 0px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 1.2px;
    padding-top: 10px;
    /* order: -1; */
  }

  #token-icon {
    display: none;
    padding-top: 10px;
    height: 80px;
    position: inherit;
  }
}

@media only screen and (min-width: 900px) {
  #venue-logo {
    max-height: 30px;
    margin: 10px;
  }
}
@media only screen and (min-width: 1000px) {
  #venue-logo {
    max-height: 50px;
  }
}
</style>
