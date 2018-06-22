<template>
  <div class="card">
    <header class="card-header">
      <h2 class="card-header-title">MY CAMPAIGN ACTIVITY</h2>
    </header>
    <div class="card-content">
      <UserStats :show-rank="showRank" />
      <ForumChart v-if="isChartVisible" class="chart"/>
      <MyCurrentRewards/>
    </div>
    <div class="card-footer">
      <a v-if="(showDetailsButton && hasCampaignData)" class="is-info is-outlined card-footer-item" @click="onClickDetails">
        <span>View details</span><span class="icon"><i class="fas fa-info-circle"/></span>
      </a>
      <a v-if="hasCampaignData" class="card-footer-item" @click="onClickSignature">
        <span>Edit signature</span><span class="icon"><i class="fas fa-edit"/></span>
      </a>
    </div>
</div></template> 

<script>
import UserStats from "~/components/UserStats.vue";
import MyCurrentRewards from "~/components/MyCurrentRewards.vue";
import ForumChart from "~/components/ForumChart.vue";

export default {
  components: {
    ForumChart,
    UserStats,
    MyCurrentRewards
  },
  props: {
    showDetailsButton: {
      type: Boolean,
      default: true
    },
    showChart: {
      type: Boolean,
      default: true
    },
    showRank: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasCampaignData: this.$store.state.userStats.hasCampaignData
    };
  },
  computed: {
    isChartVisible() {
      return this.showChart && this.hasCampaignData;
    }
  },
  methods: {
    onClickDetails() {
      this.$router.push("/PointsDetails");
    },
    onClickSignature() {
      this.$router.push("/editSignature");
    }
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 40vh;
}
</style>
