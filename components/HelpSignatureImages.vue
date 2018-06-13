<template>
  <div class="main-modal">
    <div class="steps-section">
      <button class="steps-buttons" @click="imageNumber=1">1</button>
      <hr :style="[imageNumber>=2 ? {'border-color':'#DD9C3F'} : {'border-color':'#cab595'}]" width="30%">
      <button :style="[imageNumber>=2 ? {'background-color':'#DD9C3F'} : {'background-color':'#cab595', 'border-color':'#cab595', 'box-shadow':'none'}]" 
              class="steps-buttons" 
              @click="imageNumber=2">2</button>
      <hr :style="[imageNumber>=3 ? {'border-color':'#DD9C3F'} : {'border-color':'#cab595'}]" width="30%">
      <button :style="[imageNumber>=3 ? {'background-color':'#DD9C3F'} : {'background-color':'#cab595', 'border-color':'#cab595', 'box-shadow':'none'}]" class="steps-buttons"
              @click="imageNumber=3">3</button>
    </div>
    <div class="tips-section">
      <div v-if="imageNumber==1" class="userId-form">
        <h3>1) Click on Forum Profile Information inside the Profile Tab</h3>
        <img src="/img/onboarding/bitcointalk/sigPaste1.png" >
      </div>
      <div v-if="imageNumber==2" class="userId-form">
        <h3>2) Scroll down to Signature and paste the code in the Text Area</h3>
        <img v-if="imageNumber==2" id="signature-container" src="/img/onboarding/bitcointalk/sigPaste2.png" >
      </div>
            
      <div v-if="imageNumber==3" class="userId-form">
        <h3>3) Scroll down and accept the changes</h3>
        <img v-if="imageNumber==3" id="signature-container" src="/img/onboarding/bitcointalk/sigPaste3.png" >
                
      </div>
    </div>

    <button v-if="imageNumber<3" class="btn btn-small venue-accent-color modal-default-button" @click="imageNumber+=1">
      NEXT
    </button>
    <div v-else class="md-form">
      <button class="btn venue-accent-color" @click="$emit('done')">Close Help</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageNumber: 1,
      showstep: true,
      userId: null,
      BITCOINTALK_FORUM_ID: 1
    };
  },
  mounted() {
    // setInterval(this.swap, 4000);
  }
};
</script>

<style scoped>
hr {
  border: 1px solid gray;
}

button:focus {
  outline: 0;
}
.steps-section {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.steps-buttons {
  font-weight: bold;
  font-size: 14px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #dd9c3f;
  border: 1px solid #dd9c3f;
  color: white;
  box-shadow: 1px 0.5px 8px rgba(0, 0, 0, 0.312);
}

.main-modal {
  color: white;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.tips-section {
  width: 100%;
  height: 70%;
}

img {
  max-height: 80%;
  border-radius: 5px;
}
#signature-container {
  width: 100%;
}
.userId-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.md-form {
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  width: 50% !important;
  height: 25px;
  border-radius: 0px;
  background-color: rgba(255, 254, 254, 0.1);
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 14px;
  margin: 5px !important;
}

::placeholder {
  color: white;
  padding-left: 5px;
}
.form-control:focus {
  outline: 0;
}
@media only screen and (max-width: 800px) {
  .img {
    width: 95%;
  }
}
</style>
