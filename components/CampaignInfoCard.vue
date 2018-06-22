<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">BITCOINTALK CAMPAIGN</div>
    </header>
    <div class="card-content">
      <CampaignStats />
      <availableRewards/>
    </div>
  </div>
</template>

<script>
import CampaignStats from "~/components/CampaignStats.vue";
import availableRewards from "~/components/availableRewards.vue";

export default {
  components: {
    CampaignStats,
    availableRewards
  }
};
</script>
