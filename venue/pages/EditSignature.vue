<template>
  <TwoColumnLayout>
    <div slot="left">
      <h1 class="title">EDIT SIGNATURE</h1>
      <div>
        <h4 class="subtitle is-4">Current Signature</h4>
        <img id="signature" :src="currentSignature">
        <div class="m-t-lg">
          <h4 class="subtitle is-4">Available signatures</h4>
          <AvailableSignatures :signatures="signatures" @copied="onCopy($event)"/>
        </div>
      </div>
      <b-modal :active.sync="isVerifySignatureActive" has-modal-card>
        <VerifySignature />
      </b-modal>
    </div>
    <div slot="right">
      <CampaignRightPanel />
    </div>  
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import CampaignRightPanel from "~/components/CampaignRightPanel.vue";
import VerifySignature from "~/components/VerifySignature.vue";

import { retrieveAvailableSignatures } from "~/assets/utils.js";

export default {
  components: {
    TwoColumnLayout,
    AvailableSignatures,
    CampaignRightPanel,
    VerifySignature
  },
  middleware: "authenticated",
  async asyncData({ app, store }) {
    const data = {
      signatures: [],
      currentSignature: store.state.signature
        ? store.state.signature.image
        : "",
      isVerifySignatureActive: false
    };
    const hasStats =
      store.state.user.isAuthenticated && store.state.userStats.fresh === false;

    if (hasStats) {
      const forumProfiles = await app.$axios.$get("/retrieve/forum-profiles/", {
        params: {
          forum_id: 1,
          forum_user_id: store.state.userStats.profile_level[0].forumUserId
        }
      });
      data.signatures = await retrieveAvailableSignatures(
        app.$axios,
        forumProfiles.forum_profiles[0]
      );
    }

    return data;
  },
  methods: {
    onCopy: function(sig) {
      this.$store.commit("signatureCopied", sig);
      this.isVerifySignatureActive = true;
    }
  }
};
</script>
