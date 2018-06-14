<template>
  <Stats :data="stats" />
</template>

<script>
import Stats from "~/components/Stats.vue";
import forumStatsPosts from "~/components/forumActivity/forumStatsPosts";

export default {
  components: {
    Stats,
    forumStatsPosts
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
          value: this.$store.state.leaderboard.sitewide.total_posts
        }
      ]
    };
  }
};
</script>
