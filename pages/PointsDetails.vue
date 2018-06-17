<template>
  <TwoColumnLayout>
    <div slot="left">
      <points-details-info />
    </div>
    <div slot="right">
      <div>
        <topSection/>
        <br>
        <br>
        <div class="card">
          <header class="card-header">
            <h1 class="title">MY CAMPAIGN ACTIVITY</h1>
          </header>
          <bottomSection />
          <myCurrentAwards />
        </div>
      </div>
      
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import PointsDetailsInfo from "~/components/PointsDetailsInfo.vue";
import campaignRightPanel from "~/components/campaignRightPanel.vue";
import topSection from "~/components/rightPanelTopSection.vue";
import bottomSection from "~/components/Stats.vue";
import myCurrentAwards from "~/components/myCurrentAwards.vue";

export default {
  components: {
    TwoColumnLayout,
    PointsDetailsInfo,
    campaignRightPanel,
    topSection,
    bottomSection,
    myCurrentAwards
  }
};
</script>
