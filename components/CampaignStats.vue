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
          value: this.$store.state.leaderboard.sitewide.total_users
        },
        {
          label: "TOTAL POSTS",
          value: this.$store.state.leaderboard.sitewide.total_posts
        }
      ]
    };
  }
};
</script>
