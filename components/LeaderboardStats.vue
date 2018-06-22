<template>
  <div>
    <Stats :data="stats" />
    <availableRewards :column="true"/>
  </div>
</template>

<script>
import availableRewards from "~/components/availableRewards.vue";
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Stats,
    availableRewards
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
