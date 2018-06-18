<template>
  <TwoColumnLayout>
    <div slot="left">
      <points-details-info />
    </div>
    <div slot="right">
      <div>
        <CampaignRightPanelTopSection/>
        <br>
        <br>
        <div class="card">
          <header class="card-header">
            <h1 class="title">MY CAMPAIGN ACTIVITY</h1>
          </header>
          <Stats />
          <myCurrentAwards />
        </div>
      </div>
      
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import PointsDetailsInfo from "~/components/PointsDetailsInfo.vue";
import CampaignRightPanelTopSection from "~/components/CampaignRightPanelTopSection.vue";
import Stats from "~/components/Stats.vue";
import myCurrentAwards from "~/components/myCurrentAwards.vue";

export default {
  components: {
    TwoColumnLayout,
    PointsDetailsInfo,
    CampaignRightPanelTopSection,
    Stats,
    myCurrentAwards
  }
};
</script>
