<template>
    <div class="main-modal">
        <div class="verification" v-if="!showHelp">
        <div class="steps-section">
           <h1>SIGNATURE CODE COPIED!</h1>
        </div>
        <div class="tips-section" v-if="!verified">
            <div class="loader"></div>
            <div class="text-modal">
                <h2>Simply paste the copied code to your Bitcointalk profile</h2>
                <h3 style="text-align:left">We will attempt to <u>auto-verify</u> placement for the next :<label style="color:gold"> {{timer}} </label> seconds </h3>
                <div class="flex-row-80"><label class="help-link" @click="showHelp = true">click for help</label> <button class="btn venue-accent-color" @click="validateSignature">Verify Now</button></div>
            </div>
        </div>
        <div class="tips-section" v-else>
            <div class="text-success-message">
                <h1>SUCCESS!</h1>
                <h2>Congratulations! We successfully auto-verified your new signature!</h2>
            </div>
        </div>
        </div>
        <div class="help-section" v-else>
            <HelpSignatureImages @done="showHelp = !showHelp"/>
        </div>
    </div>
</template>

<script>
import HelpSignatureImages from "./HelpSignatureImages.vue";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    HelpSignatureImages
  },
  data() {
    return {
      timer: 240,
      verified: false,
      showHelp: false
    };
  },
  mounted() {
    var scope = this;
    scope.delay = setInterval(function() {
      scope.timerCalc();
    }, 1000);
  },
  destroyed() {
    if (this.delay) {
      clearInterval(this.delay);
    }
  },
  methods: {
    timerCalc() {
      this.timer -= 1;
      if (this.timer == 0) {
        // confirm signature
        this.validateSignature();
      }
    },
    async validateSignature() {
      console.log("this.$store.getters", this.$store.getters);
      var forum_profile_id = this.$store.getters["forums/byForumId"](
        BITCOINTALK_FORUM_ID
      ).forumProfileId;

      var signature_id = this.$store.state.copiedSignatureId;

      const signatureResult = await this.$axios.$post("/create/signature/", {
        forum_profile_id,
        signature_id
      });
      console.log("data: ", signatureResult);

      this.verified = true;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.help-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tips-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid gray; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 15s linear infinite;
}
.text-modal {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.help-link {
  width: auto;
  text-decoration: underline;
}

.help-link:hover {
  cursor: pointer;
}

.flex-row-80 {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 800px) {
  .img {
    width: 95%;
  }
}
</style>
