<template>
  <div class="m-lg">
    <div class="columns">
      <div class="column">
        <LeaderboardCard :paginated="false" :limit="5"/>
      </div>
      <div class="column">
        <CampaignInfoCard />
      </div>
      <div class="column is-one-quarter">
        <LandingPageJoinCampaign v-if="(!isAuthenticated)"/>
        <LandingPageMyRewardsCard v-else/>
      </div>
    </div>
    <h2 class="title">Campaigns</h2>
    <div class="tile is-ancestor">
      <LandingPageItem name="Bitcoin Talk" info="Join now" link="/signup"/>
      <LandingPageItem name="Facebook" info="Coming soon" />
      <LandingPageItem name="Telegram" info="Coming soon" />
      <LandingPageItem name="Twitter" info="Coming soon" />
    </div>

    <h2 class="title">Bounties</h2>
    <div class="tile is-ancestor">
      <LandingPageItem name="Venue" info="Coming soon"/>
      <LandingPageItem name="Vespucci" info="Coming soon" />
      <LandingPageItem name="Verto" info="Coming soon" />
      <LandingPageItem name="VDex" info="Coming soon" />
    </div>

    <h2 class="title">Proposals</h2>
    <div class="tile is-ancestor">
      <LandingPageItem name="VLabs" info="Coming soon"/>
      <LandingPageItem name="Public" info="Coming soon" />
      <LandingPageItem name="Accepted" info="Coming soon" />
      <LandingPageItem name="Complete" info="Coming soon" />
    </div>
  </div>
</template>

<script>
import LeaderboardCard from "~/components/LeaderboardCard.vue";
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";
import LandingPageJoinCampaign from "~/components/LandingPageJoinCampaign.vue";
import LandingPageMyRewardsCard from "~/components/LandingPageMyRewardsCard.vue";
import LandingPageItem from "~/components/LandingPageItem.vue";

export default {
  components: {
    LeaderboardCard,
    CampaignInfoCard,
    LandingPageJoinCampaign,
    LandingPageMyRewardsCard,
    LandingPageItem
  },
  data() {
    return {
      ready: false,
      isAuthenticated: this.$store.state.user.isAuthenticated,
      contents: [
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
