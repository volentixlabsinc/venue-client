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
        <h3>Click on profile</h3>
        <img src="/img/onboarding/bitcointalk/step1a_alt2.png" >
      </div>
      <img v-if="imageNumber==2" src="/img/onboarding/bitcointalk/step1b_alt.png" >
      <div v-if="imageNumber==3" class="userId-form">
        <h1 style="margin:0px">Step 3</h1>
        <h3>Paste your USERID below:</h3>
        <div class="md-form">
          <input v-model="forumUserId" class="form-control" placeholder="UserId">
          <button class="btn venue-accent-color" @click="submitUserId">SUBMIT USERID</button>
        </div>
      </div>
    </div>

    <button v-if="imageNumber<3" class="btn btn-small venue-accent-color modal-default-button" @click="imageNumber+=1">
      NEXT
    </button>
  </div>
</template>

<script>
import { registerForumUser } from "~/assets/utils";

export default {
  data() {
    return {
      imageNumber: 1,
      showstep: true,
      forumUserId: null,
      forumId: 1
    };
  },
  mounted() {
    // setInterval(this.swap, 4000);
  },
  methods: {
    submitUserId: async function() {
      const profileData = await registerForumUser(
        this,
        this.forumId,
        this.forumUserId
      );
      if (profileData.success === true || profileData.exists === true) {
        // TODO Close modal and advance to step #2
      }
    }
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
  justify-content: space-around;
  align-items: center;
}

.tips-section {
  width: 100%;
  height: 70%;
}

img {
  max-height: 90%;
  border-radius: 5px;
}

.userId-form {
  height: 80%;
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
