<template>
  <TwoColumnLayout>
    <div slot="left">
      <div v-if="profile_level_global">
        <div v-for="forumInfo in profile_level_forum" :key="forumInfo.User_ID" class=" forum">
          <forum />
        </div>
      </div>
      <my-campaign :data="profile_level_global" />
      <h3 class="subtitle">Current Signature</h3>
      <img id="signature" src="/img/onboarding/sig1.png">
      <button class="button is-small is-primary">CHANGE</button>
    </div>
    <div slot="right">
      <campaign-right-panel />
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import forum from "~/components/forum.vue";
import myCampaign from "~/components/myCampaign.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";

export default {
  components: {
    TwoColumnLayout,
    forum,
    myCampaign,
    campaignRightPanel
  },
  data() {
    return {
      profile_level_forum: this.$store.state.userStats.profile_level,
      profile_level_global: this.$store.state.userStats.user_level,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  mounted() {
    if (this.$store.state.userStats.fresh) {
      this.$router.push("/onboarding/bitcointalk/");
    }
  }
};
</script>
