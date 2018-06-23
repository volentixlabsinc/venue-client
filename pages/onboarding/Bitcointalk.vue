<template>
  
  <TwoColumnLayout>
    <div slot="left">
     
      <form class="card" @submit.prevent>
        <header class="card-header">
          <h1 class="card-header-title title"> STEP {{ step }} </h1>
        </header>
        <div class="card-content">
          <div v-if="step === 1" class="form-group">
            <h4 class="subtitle">Input your Bitcointalk user ID below and click NEXT.</h4>
           
            <OnboardingInputUserProfileId @userIdConfirmed="confirmedID"/>

            <span v-if="error" style="color:red; display:block;">
              <i class="fas fa-times-circle"/> User not found - please try Again
            </span>
            <a @click="showIdHelp"><u>How do I find my bitcointalk user id?</u></a>
            <HelpModal v-if="ready" @userIdConfirmed="confirmedID"/>
          </div>
          <div v-if="step === 2" class="form-group step-2">
            <label class="directive">Choose your signature</label>
            <AvailableSignatures v-if="signatures.length > 0" :signatures="signatures"/>
            <button class="button is-primary" @click="doNext">NEXT</button>
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
import OnboardingInputUserProfileId from "~/components/OnboardingInputUserProfileId.vue";

import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import CampaignRightPanel from "~/components/CampaignRightPanel.vue";
import HelpModal from "~/components/HelpModal.vue";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import { retrieveAvailableSignatures, loadUserData } from "~/assets/utils";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    TwoColumnLayout,
    OnboardingInputUserProfileId,
    HelpModal,
    AvailableSignatures,
    CampaignRightPanel
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

        const leaderboardData = await this.$axios.$get(
          "/retrieve/leaderboard-data/"
        );
        await this.$store.commit("setLeaderboardData", leaderboardData);

        this.$router.push("/leaderboard");
      }
    },
    showIdHelp() {
      this.$modal.show("HelpModal", {
        element: "ID"
      });
    }
  }
};
</script>
