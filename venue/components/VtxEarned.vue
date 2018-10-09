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
    const data = [
      {
        label: this.$t("labels.my_earned_vtx"),
        value: this.$store.state.userStats.user_level.total_tokens
      },
      {
        label: this.$t("labels.paid"),
        value: 0
      },
      {
        label: this.$t("labels.payable"),
        value: this.$store.state.userStats.user_level.total_tokens
      }
    ];

    return {
      data
    };
  }
};
</script>
