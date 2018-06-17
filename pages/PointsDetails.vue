<template>
  <TwoColumnLayout>
    <div slot="left">
      <points-details-info />
    </div>
    <div slot="right">
      <campaign-right-panel />
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import PointsDetailsInfo from "~/components/PointsDetailsInfo.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";
export default {
  components: {
    TwoColumnLayout,
    PointsDetailsInfo,
    campaignRightPanel
  }
};
</script>
