<template>
  <TwoColumnLayout>
    <div slot="left">
      <MySignature :show-change-button="false" />
      <div>
        <h4 class="subtitle">AVAILABLE BITCOIN SIGNATURES</h4>
        <AvailableSignatures :signatures="signatures"/>
      </div>
    </div>
    <div slot="right">
      <campaignRightPanel />
    </div>  
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import MySignature from "~/components/MySignature";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";

import { retrieveAvailableSignatures } from "~/assets/utils.js";

export default {
  components: {
    TwoColumnLayout,
    MySignature,
    AvailableSignatures,
    campaignRightPanel
  },
  async asyncData({ app, store }) {
    const data = {
      signatures: []
    };
    if (store.state.user.isAuthenticated) {
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
  }
};
</script>
