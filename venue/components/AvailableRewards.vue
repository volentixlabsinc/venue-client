<template>
  <div :class="[column ? leaderboard[0] : '', dashboard[0]]">
    <div :class="[column ? leaderboard[1] : '', dashboard[1]]">{{ availableTokens }} VTX</div>
    <div :class="[column ? leaderboard[1] : '', dashboard[2]]" class="text-transform-uppercase"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>{{ $t('labels.available_rewards') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      leaderboard: ["columns reverse-row-order hero", "column is-half "],
      dashboard: [
        "",
        "is-size-3 has-text-centered",
        "is-size-5 has-text-centered"
      ],
      availableTokens: this.$store.state.leaderboard.sitewide
        ? this.$store.state.leaderboard.sitewide.available_tokens
        : 0
    };
  }
};
</script>

<style>
.reverse-row-order {
  flex-direction: row-reverse;
  align-items: center;
}
</style>
