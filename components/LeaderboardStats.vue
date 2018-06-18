<template>
  <Stats :data-source="'user'" />
</template>

<script>
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Stats
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    return {
      stats: [
        {
          label: "MY RANK",
          value: isAuthenticated
            ? this.$store.state.userStats.user_level.overall_rank
            : undefined,
          trophy: true
        },
        {
          label: "PARTICIPANTS",
          value: this.$store.state.leaderboard.sitewide.total_users
        },
        {
          label: "TOTAL POINTS",
          value: this.$store.state.leaderboard.sitewide.total_points
        }
      ]
    };
  }
};
</script>
