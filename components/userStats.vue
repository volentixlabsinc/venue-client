<template>
  <Stats :data="data" />
</template>

<script>
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Stats
  },
  props: {
    showRank: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    const data = [
      {
        label: "MY POSTS",
        value: isAuthenticated
          ? this.$store.state.userStats.profile_level[0].numPosts
          : undefined
      },
      {
        label: "MY POINTS",
        value: isAuthenticated
          ? this.$store.state.userStats.profile_level[0].totalPoints
          : undefined
      }
    ];

    if (this.showRank) {
      data.unshift({
        label: "MY RANK",
        value: isAuthenticated
          ? this.$store.state.userStats.user_level.overall_rank
          : undefined
      });
    }
    return {
      isAuthenticated,
      data
    };
  }
};
</script>
