<template>
  <TwoColumnLayout>
    <div slot="left">
      <points-details-info />
    </div>
    <div slot="right">
      <div>
        <CampaignInfoCard :columns="false"/>
        <MyCampaignActivityCard :show-details-button="false" :show-chart="false" class="m-t-lg"/>
      </div>      
    </div>
  </TwoColumnLayout>
</template>

<script>
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";
import MyCampaignActivityCard from "~/components/MyCampaignActivityCard.vue";
import PointsDetailsInfo from "~/components/PointsDetailsInfo.vue";
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";

export default {
  middleware: "auth",
  components: {
    CampaignInfoCard,
    MyCampaignActivityCard,
    PointsDetailsInfo,
    TwoColumnLayout
  }
};
</script>
