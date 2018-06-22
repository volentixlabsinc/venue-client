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
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    return {
      isAuthenticated,
      data: [
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
