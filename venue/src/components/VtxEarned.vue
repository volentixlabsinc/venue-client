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
    const hasStats =
      this.$auth.loggedIn && this.$store.state.userStats.fresh === false;
    const totalTokens = hasStats
      ? this.$store.state.userStats.user_level.total_tokens
      : 0;
    const data = [
      {
        label: this.$t("labels.my_earned_vtx"),
        value: totalTokens
      },
      {
        label: this.$t("labels.paid"),
        value: 0
      },
      {
        label: this.$t("labels.payable"),
        value: totalTokens
      }
    ];

    return {
      data
    };
  }
};
</script>
