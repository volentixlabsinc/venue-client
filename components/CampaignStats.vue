<template>
  <Stats :data="data" />
</template>

<script>
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Stats
  },
  data() {
    return {
      data: [
        {
          label: "PARTICIPANTS",
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_users
            : 0
        },
        {
          label: "TOTAL POSTS",
          value: this.$store.state.leaderboard.sitewide
            ? this.$store.state.leaderboard.sitewide.total_posts
            : 0
        }
      ]
    };
  }
};
</script>
