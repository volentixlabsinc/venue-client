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
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;
    const data = [
      {
        label: this.$t("labels.my_posts"),
        value: hasStats
          ? this.$store.state.userStats.profile_level[0].numPosts
          : undefined
      },
      {
        label: this.$t("labels.my_points"),
        value: hasStats
          ? this.$store.state.userStats.profile_level[0].totalPoints
          : undefined
      }
    ];

    if (this.showRank) {
      data.unshift({
        label: this.$t("labels.my_rank"),
        value: hasStats
          ? this.$store.state.userStats.user_level.overall_rank
          : undefined
      });
    }
    return {
      data
    };
  }
};
</script>
