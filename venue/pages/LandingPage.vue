<template>
  <div class="m-lg">
    <div class="columns">
      <div class="column">
        <LeaderboardCard :paginated="false" :limit="5" :detailed="false"/>
      </div>
      <div class="column">
        <CampaignInfoCard />
      </div>
      <div class="column is-one-quarter">
        <LandingPageJoinCampaign v-if="(!isAuthenticated)"/>
        <LandingPageMyRewardsCard v-else/>
      </div>
    </div>
    <h2 class="title">{{ $t('titles.campaigns') }}</h2>
    <div class="tile is-ancestor">
      <LandingPageItem :info="$t('buttons.btn_join_now')" name="Bitcoin Talk" link="/signup"/>
      <LandingPageItem :info="$t('labels.coming_soon')" name="Facebook" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="Telegram" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="Twitter" />
    </div>

    <h2 class="title">{{ $t('titles.bounties') }}</h2>
    <div class="tile is-ancestor">
      <LandingPageItem :info="$t('labels.coming_soon')" name="Venue"/>
      <LandingPageItem :info="$t('labels.coming_soon')" name="Vespucci" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="Verto" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="VDex" />
    </div>

    <h2 class="title">{{ $t('titles.proposals') }}</h2>
    <div class="tile is-ancestor">
      <LandingPageItem :info="$t('labels.coming_soon')" name="VLabs"/>
      <LandingPageItem :info="$t('labels.coming_soon')" name="Public" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="Accepted" />
      <LandingPageItem :info="$t('labels.coming_soon')" name="Complete" />
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
