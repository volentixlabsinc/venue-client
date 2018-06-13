<template>
  <section class="section">
    <div class="container">
      <div class="bctalk-join">
        <form class="stepform" @submit.prevent>
          <h1> STEP {{ step }} </h1>
          <div v-if="step === 1" class="form-group">
            <h4 class="directive">PLEASE INPUT YOUR BITCOINTALK <span class="emphasis">USERID</span> BELOW AND CLICK "NEXT"</h4>
            <div class="input-form">
              <input id="userid" v-model="forumUserId" type="text" placeholder="Your user id" class="form-control form-control-lg">
              <button class="btn venue-accent-color" @click="validateId">NEXT</button>
            </div>
            <span v-if="error" style="color:red; display:block;">
              <i class="fas fa-times-circle"/> User not found - please try Again
            </span>
            <span class="joinhelptxt" @click="showHelp = true">How do I find my bitcointalk user id?</span>
          </div>
          <div v-if="step === 2" class="form-group step-2">
            <label class="directive">PLEASE CHOOSE YOUR NEW SIGNATURE BELOW</label>
            <AvailableSignatures :signatures="signatures"/>
            <button class="btn venue-accent-color" @click="doNext">NEXT</button>
          </div>
          <div v-if="step === 3" class="form-group">
            <label class="directive">COPY THE CODE BELOW AND PASTE IT INTO YOUR FORUM SIGNATURE. CLICK VERIFY. </label>
            <input v-clipboard:copy="message" v-model="message" type="textarea" 
                   rows="4"
                   cols="50"
                   disabled >
            <button  
              class="btn venue-accent-color">Copy</button>
            <button class="btn btn-danger" @click="verify">Verify</button>
          </div>
        
        </form>
        <ModalWidget v-if="showHelp" @close="showHelp = false" />
            
      </div>
      <div class="lbox">
        <campaign-right-panel/>
      </div>
    </div>
  </section>
</template>



<script>
import campaignRightPanel from "~/components/campaignRightPanel.vue";
import ModalWidget from "~/components/ModalWidget.vue";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import { registerForumUser } from "~/assets/utils";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    ModalWidget,
    AvailableSignatures,
    campaignRightPanel
  },
  data() {
    return {
      activeProfile: "",
      activeForum: "",
      showHelp: false,
      disableProceed: true,
      step: 1,
      forumUserId: undefined,
      error: undefined,
      message: "",
      check: false,
      signatures: []
    };
  },
  methods: {
    doNext(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.step = this.step + 1;
    },
    doPrevious(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.step = this.step - 1;
    },
    async validateId(evt) {
      evt.preventDefault();

      const forumProfile = await registerForumUser(
        this,
        BITCOINTALK_FORUM_ID,
        this.forumUserId
      );
      this.retrieveSignatures(forumProfile.id);
      this.doNext();
    },
    async verify() {
      var forum_profile_id = this.$store.getters["forums/byForumId"](
        BITCOINTALK_FORUM_ID
      ).forumProfileId;
      var signature_id = this.$store.state.copiedSignatureId;

      const signatureResult = await this.$axios.$post("/create/signature/", {
        forum_profile_id,
        signature_id
      });
      if (signatureResult.success) {
        const userStats = await this.$axios.$get("/retrieve/stats/");
        await this.$store.commit("setUserStats", userStats.stats);

        // this.$swal({
        //   title: "Signature Placement Verified",
        //   text: "You can now start posting and earning VTX",
        //   icon: "success",
        //   button: {
        //     text: "ok",
        //     className: "btn-primary",
        //     closeModal: true
        //   }
        // }).then(() => {
        this.$router.push("/leaderboard");
        // });
      } else {
        // this.$swal({
        //   title: "The signature was not found",
        //   text: "Unfortunately the signature was not found",
        //   icon: "error",
        //   button: {
        //     text: "OK",
        //     className: "btn-primary",
        //     closeModal: true
        //   }
        // });
      }
    },
    async retrieveSignatures(forumProfileId) {
      const signatures = await this.$axios.$get("/retrieve/signatures/", {
        params: {
          forum_site_id: BITCOINTALK_FORUM_ID,
          forum_profile_id: forumProfileId
        }
      });
      // TODO Filter basesd on the store.state.userStats.profile_level[0].forumUserRank
      this.signatures = signatures.signatures.filter(signature =>
        signature.name.startsWith("Full Member")
      );
      // signature => signature.name.startsWith('Sr. Member'))
    }
  }
};
</script>

<style scoped>
.section {
  color: white;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-face-color: #367cd2;
  scrollbar-shadow-color: #ffffff;
  scrollbar-highlight-color: #ffffff;
  scrollbar-3dlight-color: #ffffff;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-track-color: #ffffff;
  scrollbar-arrow-color: #ffffff;
}

.section::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}

/* Handle */
.section::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
}

.stepper-box {
  border-radius: 10px;
  width: 100%;
  height: 80%;
  overflow: scroll;
}
/* >>> #68 - add leaderboard on rhs */
.lbox h2 {
  color: #97a5b3;
}
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lbox {
  /* based off of css in dashboard/allCampaigns.vue */
  /*padding-top: 20px;*/
  padding-top: 2rem;
  width: 50%; /*90%;*/
  /* height: 100%; */
  display: inherit;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-face-color: #367cd2;
  scrollbar-shadow-color: #ffffff;
  scrollbar-highlight-color: #ffffff;
  scrollbar-3dlight-color: #ffffff;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-track-color: #ffffff;
  scrollbar-arrow-color: #ffffff;
  padding-bottom: 50px;
}

.lbox::-webkit-scrollbar {
  width: 0px;
}

.lbox::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}

.lbox::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
}

.form-group {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.step-2 {
  height: 90%;
}

.input-form {
  width: 90%;
}

.form-control {
  color: white;
  width: 70% !important;
  height: 30px;
  border-radius: 0px;
  background-color: rgba(255, 254, 254, 0.1);
  border: none;
  border-bottom: 1px solid white;
}

::placeholder {
  color: white;
  padding-left: 5px;
}

button {
  width: 70% !important;
}
.directive {
  width: 70%;
}
</style>

<style>
#app .lbox table tbody td {
  color: white;
}
@media only screen and (max-width: 1300px) {
  #app .lbox th.RANK,
  #app .lbox th.USERNAME,
  #app .lbox th.POSTS,
  #app .lbox th.VTX,
  #app .lbox table tbody td {
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 1100px) {
  #app .lbox {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  #app .step-image {
    width: 95%;
  }
}
.stepform {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  margin: 0;
  border-radius: 8px;
}
</style>


<style scoped>
/* #68 - corrected layout */
.emphasis {
  text-decoration: underline;
}
h2 {
  color: #97a5b3;
}
.button-group {
  display: flex;
}

form.stepform input,
form.stepform button,
form.stepform label {
  width: 50%;
  max-width: 500px;
  font-size: 1rem;
}
form.stepform label {
  /* text-align: justify; */
  display: inline-block;
  color: #97a5b3;
  font-size: 95%;
}
form.stepform input {
  width: 45%;
}
form.stepform input[type="textarea"] {
  height: 100px;
  overflow-wrap: break-word;
}

.bctalk-join {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
span.joinhelptxt {
  display: block;
  color: #97a5b3;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
}
span.joinhelptxt:hover {
  color: #85449a;
}
.joinhelp {
  padding: 2rem;
}
</style>
