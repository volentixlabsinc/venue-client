<template>

  <TwoColumnLayout>
    <div slot="left">
      <h1 class="title">Welcome to the Bitcoin Talk campaign</h1>
      <h2 class="subtitle">STEP {{ step }}</h2>
      <div class="box">
        <div v-if="step === 1">
          <b-field label="Your profile ID from Bitcoin Talk">
            <OnboardingInputUserProfileId @verified="userIdVerified($event)"/>
          </b-field>

          <a @click="isHelpModalActive = true">How do I find my bitcointalk user id?</a>
          <b-modal :active.sync="isHelpModalActive" has-modal-card @close="maybeRegisterForumUser">
            <HelpModal @verified="userIdVerified($event)"/>
          </b-modal>
          <div>
            <button :disabled="!userVerified" class="button is-primary m-t-md" @click="maybeRegisterForumUser">Next</button>
          </div>
        </div>
        <div v-if="step === 2">
          <label class="directive">Choose your signature</label>
          <AvailableSignatures v-if="signatures.length > 0" :signatures="signatures" @copied="onCopy($event)"/>
          <b-modal :active.sync="isVerifySignatureActive" has-modal-card>
            <VerifySignature @verified="loadLeaderboardAndGo"/>
          </b-modal>
          <div>
            <button class="button" @click="doPrevious">Previous</button>
            <button :disabled="!userVerified" class="button is-primary m-l-md" @click="gotoStep2">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div slot="right" class="is-hidden-mobile">
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
import VerifySignature from "~/components/VerifySignature.vue";
import { retrieveAvailableSignatures, loadUserData } from "~/assets/utils";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    TwoColumnLayout,
    OnboardingInputUserProfileId,
    HelpModal,
    AvailableSignatures,
    CampaignRightPanel,
    VerifySignature
  },
  data() {
    return {
      forumUserId: "",
      forumProfileId: "",
      activeForum: "",
      disableProceed: true,
      step: 1,
      error: undefined,
      message: "",
      userVerified: false,
      check: false,
      signatures: [],
      ready: false,
      showMessageError: {
        error: false,
        message: ""
      },
      isHelpModalActive: false,
      isVerifySignatureActive: false
    };
  },
  middleware: "authenticated",
  mounted() {
    this.ready = true;
  },
  methods: {
    gotoStep2() {
      this.retrieveSignature();
      this.step = 2;
    },
    doNext() {
      this.step = this.step + 1;
    },
    doPrevious() {
      this.step = this.step - 1;
    },
    maybeRegisterForumUser() {
      if (this.userVerified) {
        if (!this.$store.state.forum_profile.forum_profile_id) {
          this.registerForumUser();
        } else {
          this.gotoStep2();
        }
      }
    },
    registerForumUser: async function() {
      const forumProfile = await this.$axios.$post("/create/forum-profile/", {
        forum_id: BITCOINTALK_FORUM_ID,
        forum_user_id: this.forumUserId
      });

      console.log("created forum profile", forumProfile);

      if (forumProfile.success || forumProfile.verified === false) {
        this.$store.commit("setForumProfile", forumProfile);
        this.gotoStep2();
      } else {
        // TODO show error
      }
    },
    async retrieveSignature() {
      this.signatures = await retrieveAvailableSignatures(
        this.$axios,
        this.$store.state.forum_profile
      );
    },
    userIdVerified(forumUserId) {
      console.log("verified", forumUserId);
      this.forumUserId = forumUserId;
      this.userVerified = true;
    },
    onCopy: function(sig) {
      this.$store.commit("signatureCopied", sig);
      this.isVerifySignatureActive = true;
    },
    async loadLeaderboardAndGo() {
      await loadUserData(this.$store.commit, this.$axios);

      const leaderboardData = await this.$axios.$get(
        "/retrieve/leaderboard-data/"
      );
      console.log(leaderboardData);
      await this.$store.commit("setLeaderboardData", leaderboardData);

      this.$router.push("/leaderboard");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>
