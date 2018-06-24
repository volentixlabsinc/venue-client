<template>
  <TwoColumnLayout>
    <div slot="left">
      <MyCampaignActivityCard />
    </div>
    <div slot="right">
      <campaign-right-panel />
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import MyCampaignActivityCard from "~/components/MyCampaignActivityCard.vue";
import CampaignRightPanel from "~/components/CampaignRightPanel.vue";

export default {
  components: {
    TwoColumnLayout,
    MyCampaignActivityCard,
    CampaignRightPanel
  },
  mounted() {
    if (this.$store.state.userStats.fresh) {
      this.$router.push("/onboarding/bitcointalk/");
    }
  }
};
</script>
