<template>
  <div class="m-lg">
    <div class="columns">
      <div class="column">
        <LeaderboardCard />
      </div>
      <div class="column">
        <CampaignInfoCard />
      </div>
      <div class="column is-one-quarter">
        <LandingPageJoinCampaign v-if="(!isAuthenticated)"/>
        <LandingPageMyRewardsCard v-else/>
      </div>
    </div>
    <div v-for="(el, LandingPage) in contents" :key="LandingPage">
      <LandingPage-sections :title="el.title" :content="el.content" :is-authenticated="isAuthenticated"/>
    </div>
  </div>
</template>

<script>
import LeaderboardCard from "~/components/LeaderboardCard.vue";
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";
import LandingPageSections from "~/components/LandingPageSections.vue";
import LandingPageJoinCampaign from "~/components/LandingPageJoinCampaign.vue";
import LandingPageMyRewardsCard from "~/components/LandingPageMyRewardsCard.vue";
import CampaignRightPanel from "~/components/CampaignRightPanel.vue";

export default {
  components: {
    LeaderboardCard,
    CampaignInfoCard,
    LandingPageSections,
    LandingPageJoinCampaign,
    CampaignRightPanel,
    LandingPageMyRewardsCard
  },
  data() {
    return {
      ready: false,
      isAuthenticated: this.$store.state.user.isAuthenticated,
      contents: [
        {
          title: "Campaigns",
          content: [
            {
              text: "Bitcointalk",
              linkText: "Join",
              disabled: false
            },
            {
              text: "Facebook",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Reddit",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Twitter",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        },

        {
          title: "Bounties",
          content: [
            {
              text: "Volentix",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Venue",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "VDX",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Vespucci",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        },

        {
          title: "Proposals",
          content: [
            {
              text: "VLabs",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Public",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Accepted",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Completed",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.level-item {
  width: 15% !important;
}
.border-column {
  border: 1px solid grey;
}
</style>
