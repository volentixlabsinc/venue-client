<template>
  <TwoColumnLayout>
    <div slot="left">
      <h2 class="title is-2">BITCOINTALK ACTIVITY</h2>
      <ForumChart class="chart"/>
      <MyCampaign />
      <MySignature />
    </div>
    <div slot="right">
      <campaign-right-panel />
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import ForumChart from "~/components/ForumChart.vue";
import MyCampaign from "~/components/MyCampaign.vue";
import MySignature from "~/components/MySignature";
import campaignRightPanel from "~/components/campaignRightPanel.vue";

export default {
  components: {
    TwoColumnLayout,
    ForumChart,
    MyCampaign,
    MySignature,
    campaignRightPanel
  },
  data() {
    return {
      profile_level_forum: this.$store.state.userStats.profile_level,
      profile_level_global: this.$store.state.userStats.user_level,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  mounted() {
    if (this.$store.state.userStats.fresh) {
      this.$router.push("/onboarding/bitcointalk/");
    }
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 30vh;
}
</style>
