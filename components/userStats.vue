<template>
  <div>
    <forum-chart v-if="isAuthenticated" :width="450" :height="300" />
    <Stats :data="stats" />
    <MyCurrentRewards />
  </div>
</template>

<script>
import Stats from "~/components/Stats.vue";
import ForumChart from "~/components/forumActivity/ForumChart.vue";
import MyCurrentRewards from "~/components/MyCurrentRewards.vue";

export default {
  components: {
    Stats,
    ForumChart,
    MyCurrentRewards
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    console.log("pro", this.$store.state.userStats.profile_level[0]);
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
