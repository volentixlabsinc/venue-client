<template>
  <div class="modal-card">
    <header class="modal-card-head" >
      <div class="modal-card-title">{{ $t('edit_signature.verify_title') }}</div>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-hidden-mobile">
          <div class="spinner m-t-lg m-l-sm"/>
        </div>
        <div class="column is-three-quarters">
          <div class="p-b-md">{{ $t('bct_onboarding.bct_signature_paste') }}</div>
          <div class="box">
            <span class="icon has-text-warning is-medium">
              <i class="fas fa-exclamation-triangle fa-lg"/>
            </span>
            <span class="is-size-6">{{ $t('messages.signature_warning_1') }}</span>
          </div>
          <div><a @click="isHelpModalActive = true">{{ $t('bct_onboarding.msg_sig_update_how') }}</a></div>
          <b-modal :active.sync="isHelpModalActive" has-modal-card>
            <HelpModal element="signature"/>
          </b-modal>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">{{ $t('buttons.btn_cancel') }}</button>
      <button class="button is-primary" @click="validateSignature">{{ $t('bct_onboarding.btn_verify_now') }}</button>
      <span class="icon has-text-danger is-medium"><i v-show="validationFailed" class="fas fa-exclamation-circle fa-lg"/></span>
    </footer>
  </div>
</template>

<script>
import HelpModal from "~/components/HelpModal.vue";
import { refreshMySignature } from "~/assets/utils.js";

const BITCOINTALK_FORUM_ID = 1;

export default {
  components: {
    HelpModal
  },
  data() {
    return {
      isHelpModalActive: false,
      forumProfile: this.$store.state.forum_profile,
      validationFailed: false
    };
  },
  methods: {
    async validateSignature() {
      if (!this.forumProfile) {
        const params = {
          forum_id: BITCOINTALK_FORUM_ID,
          forum_user_id: this.$store.state.userStats.profile_level[0]
            .forumUserId
        };
        const forumProfiles = await this.$axios.$get(
          "/retrieve/forum-profiles/",
          { params }
        );
        if (!forumProfiles.success) {
          // TODO Handle failure
        }
        this.forumProfile = forumProfiles.forum_profiles[0];
        this.$store.commit("setForumProfile", this.forumProfile);
      }

      try {
        const signatureResult = await this.$axios.$post("/create/signature/", {
          forum_profile_id: this.forumProfile.forum_profile_id,
          signature_id: this.$store.state.copiedSignatureId
        });

        if (signatureResult.success === true) {
          this.$snackbar.open("Signature verified");
          await refreshMySignature(this.$axios, this.$store.commit);
          this.validationFailed = false;
          this.$emit("verified");
          this.$parent.close();
        } else {
          this.validationFailed = true;
        }
      } catch (e) {
        console.log("response", e.response);
        if (e.response.data.message === "signature_not_found") {
          this.validationFailed = true;
        } else {
          // TODO Handle other errors
        }
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: underline;
}

.spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid gray; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 15s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
