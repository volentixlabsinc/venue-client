<template>
  <TwoColumnLayout>
    <div slot="left">
      <h2 class="title is-2">BITCOINTALK ACTIVITY</h2>
      <ForumChart class="chart"/>
      <UserStats />
      <DashboardMyCurrentRewards />
      <MySignature />
    </div>
    <div slot="right">
      <campaign-right-panel />
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import ForumChart from "~/components/ForumChart.vue";
import UserStats from "~/components/UserStats.vue";
import DashboardMyCurrentRewards from "~/components/DashboardMyCurrentRewards.vue";

import MySignature from "~/components/MySignature";
import campaignRightPanel from "~/components/campaignRightPanel.vue";

export default {
  components: {
    TwoColumnLayout,
    ForumChart,
    UserStats,
    DashboardMyCurrentRewards,
    MySignature,
    campaignRightPanel
  },
  data() {
    const numPosts = this.$store.state.userStats.profile_level[0].numPosts;
    return {
      myTokens: this.$store.state.userStats.profile_level[0].VTX_Tokens,
      stats: [
        {
          label: "MY RANK",
          value: this.$store.state.userStats.user_level.overall_rank,
          startAt: 50
        },
        {
          label: "MY POSTS",
          value: numPosts,
          startAt: numPosts + 20
        },
        {
          label: "MY POINTS",
          value: this.$store.state.userStats.profile_level[0].totalPoints
        }
      ],
      profile_level_forum: this.$store.state.userStats.profile_level,
      profile_level_global: this.$store.state.userStats.user_level
    };
  },
  mounted() {
    if (this.$store.state.userStats.fresh) {
      this.$router.push("/onboarding/bitcointalk/");
    }
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 30vh;
}
</style>
