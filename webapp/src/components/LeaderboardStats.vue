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
          label: this.$t("labels.my_rank"),
          value: this.$store.state.userStats.hasCampaignData
            ? this.$store.state.userStats.user_level.overall_rank
            : undefined,
          trophy: true
        },
        {
          label: this.$t("labels.participants"),
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_users
            : 0
        },
        {
          label: this.$t("labels.total_points"),
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_points
            : 0
        }
      ]
    };
  }
};
</script>
