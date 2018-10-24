<template>
  <TwoColumnLayout>
    <div slot="left">
      <div v-if="$store.state.user.isAuthenticated" class="p-b-lg">
        <h1 class="title">{{ $t("titles.vtx_earned") }}</h1>
        <VtxEarned />
      </div>
      <h1 class="title">{{ $t("titles.bct_leaderboard") }}</h1>
      <LeaderboardStats />
      <Leaderboard />
    </div>
    <div slot="right">
      <MyCampaignActivityCard />
      <CampaignInfoCard class="m-t-lg"/>
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import VtxEarned from "~/components/VtxEarned.vue";
import Leaderboard from "~/components/Leaderboard.vue";
import LeaderboardStats from "~/components/LeaderboardStats.vue";
import MyCampaignActivityCard from "~/components/MyCampaignActivityCard.vue";
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";

export default {
  components: {
    TwoColumnLayout,
    VtxEarned,
    Leaderboard,
    LeaderboardStats,
    MyCampaignActivityCard,
    CampaignInfoCard
  }
};
</script>
