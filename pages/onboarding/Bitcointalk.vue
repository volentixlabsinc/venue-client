<template>
  
  <TwoColumnLayout>
    <div slot="left">
     
      <form class="card" @submit.prevent>
        <header class="card-header">
          <h1 class="card-header-title title has-text-white"> STEP {{ step }} </h1>
        </header>
        <div class="card-content">
          <div v-if="step === 1" class="form-group">
            <h4 class="subtitle">PLEASE INPUT YOUR BITCOINTALK <span class="emphasis">USERID</span> BELOW AND CLICK "NEXT"</h4>
            <div class="columns is-multiline">
              <div class="column">
                <input id="userid" v-model="forumUserId" type="text" placeholder="Your user id" class="input ">
                <p v-show="showMessageError.error" class="is-size-7 has-text-danger">{{ showMessageError.message }}</p>
              </div>
              <div class="column">
                <button class="button is-primary" @click="validateId">NEXT</button>
              </div>
              
            </div>
            
            <span v-if="error" style="color:red; display:block;">
              <i class="fas fa-times-circle"/> User not found - please try Again
            </span>
            <a @click="showIdHelp"><u>How do I find my bitcointalk user id?</u></a>
            <helpModal v-if="ready" @userIdConfirmed="confirmedID"/>
          </div>
          <div v-if="step === 2" class="form-group step-2">
            <label class="directive">PLEASE CHOOSE YOUR NEW SIGNATURE BELOW</label>
            <AvailableSignatures v-if="signatures.length > 0" :signatures="signatures"/>
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
        </div>
        
      </form>
            
       
  
    </div>


    <div slot="right">
      <campaign-right-panel/>
    </div>
  </TwoColumnLayout>
</template>



<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";
import helpModal from "~/components/helpModal.vue";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import {
  registerForumUser,
  retrieveAvailableSignatures,
  loadUserData
} from "~/assets/utils";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    TwoColumnLayout,
    helpModal,
    AvailableSignatures,
    campaignRightPanel
  },
  data() {
    return {
      activeProfile: "",
      activeForum: "",
      disableProceed: true,
      step: 1,
      forumUserId: undefined,
      error: undefined,
      message: "",
      check: false,
      signatures: [],
      forumProfile: undefined,
      ready: false,
      showMessageError: {
        error: false,
        message: ""
      }
    };
  },
  mounted() {
    this.ready = true;
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
      if (!forumProfile.exist && forumProfile.success) {
        this.retrieveSignature(forumProfile);
        this.doNext();
      } else {
        this.showMessageError = {
          error: true,
          message: "This userid is already attached to a Venue profile"
        };
      }
    },
    async retrieveSignature(forumProfile) {
      this.signatures = await retrieveAvailableSignatures(
        this.$axios,
        forumProfile
      );
    },
    confirmedID(forumProfile) {
      this.retrieveSignature(forumProfile);
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
        await loadUserData(this.$store.commit, this.$axios);

        this.$store.commit(
          "setLeaderboardData",
          await this.$axios.$get("/retrieve/leaderboard-data/")
        );

        this.$router.push("/leaderboard");
      }
    },
    showIdHelp() {
      this.$modal.show("helpModal", {
        element: "ID"
      });
    }
  }
};
</script>
