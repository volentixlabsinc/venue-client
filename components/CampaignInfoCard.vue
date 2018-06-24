<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">BITCOINTALK CAMPAIGN</div>
    </header>
    <div class="card-content">
      <CampaignStats />
      <AvailableRewards/>
    </div>
  </div>
</template>

<script>
import CampaignStats from "~/components/CampaignStats.vue";
import AvailableRewards from "~/components/AvailableRewards.vue";

export default {
  components: {
    CampaignStats,
    AvailableRewards
  }
};
</script>
