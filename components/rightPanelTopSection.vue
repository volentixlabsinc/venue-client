<template>
  <div class="card">
    <header class="card-header">
      <h2 class="title">BITCOINTALK CAMPAIGN</h2>
    </header>
    <CampaignStats />
    <div>
      <div class="is-size-3 has-text-centered">{{ availableTokens }} VTX</div>
      <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>AVAILABLE REWARDS</div>
    </div>
  </div>
</template>

<script>
import CampaignStats from "~/components/CampaignStats.vue";

export default {
  components: {
    CampaignStats
  },
  data() {
    return {
      availableTokens: this.$store.state.leaderboard.sitewide.available_tokens,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  }
};
</script>
