<template>
  <div class="my-campaign">
    <Stats :data="stats" />
    <MyCurrentRewards />
  </div>
</template>

<script>
import MyCurrentRewards from "~/components/MyCurrentRewards.vue";
import Stats from "~/components/Stats.vue";

export default {
  components: {
    MyCurrentRewards,
    Stats
  },
  data() {
    const numPosts = this.$store.state.userStats.profile_level[0].numPosts;
    return {
      myTokens: this.$store.state.userStats.profile_level[0].VTX_Tokens,
      stats: [
        {
          label: "MY RANK",
          value: this.$store.state.userStats.user_level.overall_rank,
          startAt: 50
        },
        {
          label: "MY POSTS",
          value: numPosts,
          startAt: numPosts + 20
        },
        {
          label: "MY POINTS",
          value: this.$store.state.userStats.profile_level[0].totalPoints
        }
      ]
    };
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    },
    onClickDetails() {
      this.$router.push("/points-details");
    }
  }
};
</script>
