<template>
  <TwoColumnLayout>
    <div slot="left">
      <h1 class="title">{{ $t("titles.vtx_earned") }}</h1>
      <VtxEarned />
      <h1 class="title">{{ $t("titles.bct_leaderboard") }}</h1>
      <LeaderboardStats />
      <Leaderboard />
    </div>
    <div slot="right">
      <MyCampaignActivityCard />
    </div>
  </TwoColumnLayout>
</template>
  
<script>
import VtxEarned from "~/components/VtxEarned.vue";
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import Leaderboard from "~/components/Leaderboard.vue";
import MyCampaignActivityCard from "~/components/MyCampaignActivityCard.vue";
import LeaderboardStats from "~/components/LeaderboardStats.vue";

export default {
  components: {
    TwoColumnLayout,
    VtxEarned,
    Leaderboard,
    LeaderboardStats,
    MyCampaignActivityCard
  }
};
</script>
