<template>
  <div>
    <forum-chart v-if="isAuthenticated" :width="450" :height="300" />
    <Stats :data="stats" />
    <UserStatsMyCurrentRewards />
  </div>
</template>

<script>
import Stats from "~/components/Stats.vue";
import ForumChart from "~/components/ForumChart.vue";
import UserStatsMyCurrentRewards from "~/components/UserStatsMyCurrentRewards.vue";

export default {
  components: {
    Stats,
    ForumChart,
    UserStatsMyCurrentRewards
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    return {
      isAuthenticated,
      stats: [
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
      ]
    };
  }
};
</script>
