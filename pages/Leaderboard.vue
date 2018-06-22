<template>
  <TwoColumnLayout>
    <div slot="left">
      <h1 class="title">BITCOINTALK LEADERBOARD</h1>
      <LeaderboardStats v-if="$store.state.leaderboard.sitewide.total_users>0" />
      <leaderboard />
    </div>
    <div slot="right">
      <MyCampaignActivityCard />
    </div>
  </TwoColumnLayout>
</template>
  
<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import leaderboard from "~/components/leaderboard/index.vue";
import ForumChart from "~/components/ForumChart.vue";
import MyCampaignActivityCard from "~/components/MyCampaignActivityCard.vue";
import LeaderboardStats from "~/components/LeaderboardStats.vue";

export default {
  components: {
    TwoColumnLayout,
    leaderboard,
    ForumChart,
    LeaderboardStats,
    MyCampaignActivityCard
  }
};
</script>
