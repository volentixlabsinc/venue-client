<template>
  <div>
    <Stats :data="stats" />
    <AvailableRewards :column="true"/>
  </div>
</template>

<script>
import AvailableRewards from "~/components/AvailableRewards.vue";
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Stats,
    AvailableRewards
  },
  data() {
    return {
      stats: [
        {
          label: "MY RANK",
          value: this.$store.state.userStats.hasCampaignData
            ? this.$store.state.userStats.user_level.overall_rank
            : undefined,
          trophy: true
        },
        {
          label: "PARTICIPANTS",
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_users
            : 0
        },
        {
          label: "TOTAL POINTS",
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_points
            : 0
        }
      ]
    };
  }
};
</script>
