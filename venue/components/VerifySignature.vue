<template>
  <div class="modal-card">
    <header class="modal-card-head" >
      <div class="modal-card-title">Signature copied</div>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <div class="spinner is-pulled-right"/>
        </div>
        <div class="column">
          <div>Now paste the copied code to your Bitcointalk profile.</div>
          <div><a @click="isHelpModalActive = true">Click for help</a></div>
          <b-modal :active.sync="isHelpModalActive" has-modal-card>
            <HelpModal element="signature"/>
          </b-modal>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Cancel</button>
      <button class="button is-primary" @click="validateSignature">Verify now</button>
    </footer>
  </div>
</template>

<script>
import ConfirmCopy from "./ConfirmCopy.vue";
import HelpModal from "~/components/HelpModal.vue";

const BITCOINTALK_FORUM_ID = 1;

export default {
  name: "VerifySignature",
  components: {
    ConfirmCopy,
    HelpModal
  },
  data() {
    return {
      isHelpModalActive: false
    };
  },
  methods: {
    async validateSignature() {
      var forum_profile_id = this.$store.getters["forums/byForumId"](
        BITCOINTALK_FORUM_ID
      ).forumProfileId;

      var signature_id = this.$store.state.copiedSignatureId;

      const signatureResult = await this.$axios.$post("/create/signature/", {
        forum_profile_id,
        signature_id
      });

      if (signatureResult.success === true) {
        this.$emit("success");
        this.$parent.close();
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
