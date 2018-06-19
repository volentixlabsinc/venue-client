<template>
  <div class="card">
    <header class="card-header">
      <h2 class="title">BITCOINTALK CAMPAIGN</h2>
    </header>
    <Stats :data-source="'campaign'"/>
    <availableRewards/>
  </div>
</template>

<script>
import Stats from "~/components/Stats.vue";
import availableRewards from "~/components/availableRewards.vue";

export default {
  components: {
    Stats,
    availableRewards
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
