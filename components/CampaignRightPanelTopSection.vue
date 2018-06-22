<template>
  <div class="card">
    <header class="card-header">
      <h2 v-show="(!columns)" class="title">BITCOINTALK CAMPAIGN</h2>
    </header>
    <CampaignStats />
    <availableRewards/>
  </div>
</template>

<script>
import CampaignStats from "~/components/CampaignStats.vue";
import availableRewards from "~/components/availableRewards.vue";

export default {
  components: {
    CampaignStats,
    availableRewards
  },
  props: {
    columns: {
      type: Boolean,
      default: true
    }
  }
};
</script>
