<template>
  <TwoColumnLayout>
    <div slot="left">
      <points-details-info />
    </div>
    <div slot="right">
      <div>
        <CampaignRightPanelTopSection :columns="false"/>
        <br>
        <br>
        <div class="card">
          <header class="card-header">
            <h1 class="title">MY CAMPAIGN ACTIVITY</h1>
          </header>
          <UserStats />
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
import UserStats from "~/components/UserStats.vue";
import myCurrentAwards from "~/components/myCurrentAwards.vue";

export default {
  components: {
    TwoColumnLayout,
    PointsDetailsInfo,
    CampaignRightPanelTopSection,
    UserStats,
    myCurrentAwards
  }
};
</script>
