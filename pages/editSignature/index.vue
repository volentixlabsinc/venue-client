<template>
  <TwoColumnLayout>
    <div slot="left">
      <h4 class="subtitle">CURRENT SIGNATURE</h4>
      <!-- <img :src="currentSignatureImg" /> -->
      <h4 class="subtitle">AVAILABLE BITCOIN SIGNATURES</h4>
      <AvailableSignatures :signatures="signatures"/>
    </div>
    <div slot="right">
      <campaignRightPanel />
    </div>  
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";

export default {
  components: {
    TwoColumnLayout,
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
      const signatures = await app.$axios.$get("/retrieve/signatures/", {
        params: {
          forum_site_id: 1,
          forum_profile_id: forumProfiles.forum_profiles[0].id
        }
      });
      // TODO Filter basesd on the store.state.userStats.profile_level[0].forumUserRank
      data.signatures = signatures.signatures.filter(signature =>
        signature.name.startsWith("Full Member")
      );
      // signature => signature.name.startsWith('Sr. Member'))
    }
    console.log("data", data);
    return data;
  }
};
</script>
