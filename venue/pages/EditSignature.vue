<template>
  <TwoColumnLayout>
    <div slot="left">
      <h1 class="title text-transform-uppercase">{{ $t('buttons.btn_edit_signature') }}</h1>
      <div>
        <h4 class="subtitle is-4">{{ $t('edit_signature.current_signature') }}</h4>
        <img id="signature" :src="currentSignature">
        <div class="m-t-lg">
          <h4 class="subtitle is-4">{{ $t('edit_signature.available_signatures') }}</h4>
          <AvailableSignatures :signatures="signatures" @copied="onCopy($event)"/>
        </div>
      </div>
      <b-modal :active.sync="isVerifySignatureActive" has-modal-card>
        <VerifySignature @verified="refreshSignature"/>
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

    if (
      store.forum_profile &&
      store.forum_profile.forum_profile_id.length > 0
    ) {
      data.signatures = await retrieveAvailableSignatures(
        app.$axios,
        store.forumProfile
      );
    } else {
      const hasStats =
        store.state.user.isAuthenticated &&
        store.state.userStats.fresh === false;

      if (hasStats) {
        const forumProfile = await app.$axios.$get("/check/profile/", {
          params: {
            forum_id: 1,
            forum_user_id: store.state.userStats.profile_level[0].forumUserId
          }
        });
        store.commit("setForumProfile", forumProfile);
        data.signatures = await retrieveAvailableSignatures(
          app.$axios,
          forumProfile
        );
      }
    }

    return data;
  },
  methods: {
    onCopy: function(sig) {
      this.$store.commit("signatureCopied", sig);
      this.isVerifySignatureActive = true;
    },
    refreshSignature() {
      this.currentSignature = this.$store.state.signature.image;
    }
  }
};
</script>
