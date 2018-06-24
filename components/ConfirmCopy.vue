<template>
  <div>
    <div class="card">
      <div>
        <header class="card-header ">
          <h1 class="card-header-title title has-text-white">SIGNATURE CODE COPIED!</h1>
        </header>
        <div class="card-content">
        
          <div class="columns is-multiline is-vcentered">
            <div class="column is-half ">
              <div class="loader is-pulled-right"/>
            </div>
            <div class="column is-half">
              <div class="text-modal">
                <h2>Simply paste the copied code to your Bitcointalk profile</h2>
                <!-- <h3 style="text-align:left">We will attempt to <u>auto-verify</u> placement for the next :<label style="color:gold"> {{ timer }} </label> seconds </h3> -->
                <div class="flex-row-80"><label class="help-link" @click="showHelp">click for help</label> <button class="btn venue-accent-color" @click="validateSignature">Verify Now</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-else class="tips-section">
        <div class="text-success-message">
          <h1>SUCCESS!</h1>
          <h2>Congratulations! We successfully verified your new signature!</h2>
        </div>
        <div>
          <a class="button" @click="gotoLeaderboard">Close</a>
        </div>
      </div> -->
      <FeedbackModal @feedbackEmits="closeModal"/>
      <HelpModal />
    </div>
    <!-- <div v-else class="help-section"> -->
    <!-- <HelpSignatureImages @done="showHelp = !showHelp"/> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import HelpSignatureImages from "./HelpSignatureImages.vue";
import FeedbackModal from "~/components/FeedbackModal.vue";
import HelpModal from "~/components/HelpModal.vue";
import { loadUserData } from "~/assets/utils.js";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    // HelpSignatureImages,
    FeedbackModal,
    HelpModal
  },
  data() {
    return {
      timer: 240,
      verified: false
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
    showHelp() {
      // console.log("click");
      this.$modal.show("HelpModal", { element: "signature" });
    },
    timerCalc() {
      this.timer -= 1;
      if (this.timer == 0) {
        // confirm signature
        this.validateSignature();
      }
    },
    async validateSignature() {
      var forum_profile_id = this.$store.getters["forums/byForumId"](
        BITCOINTALK_FORUM_ID
      ).forumProfileId;

      var signature_id = this.$store.state.copiedSignatureId;

      const signatureResult = await this.$axios.$post("/create/signature/", {
        forum_profile_id,
        signature_id
      });
      console.log("data: ", signatureResult);

      this.$modal.show("FeedbackModal", {
        type: "success",
        title: "Success!",
        message:
          "Congratulations! We successfully verified your new signature!",
        buttonText: "CLOSE",
        sendActionToFeedback: true
      });
    },
    closeModal() {
      this.$modal.hide("VerifySignature");
      this.gotoLeaderboard();
    },
    async gotoLeaderboard() {
      await loadUserData(this.$store.commit, this.$axios);
      this.$router.push("/leaderboard");
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
