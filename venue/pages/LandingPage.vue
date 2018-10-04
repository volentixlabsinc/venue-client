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
    <div class="columns p-l-xl p-r-xl">
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-youtube-blog.png')" :name="$t('campaigns.title_youtube')" :info="$t('campaigns.youtube')" highlight="#fc0514"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-rules.png')" :name="$t('campaigns.title_rules')" :info="$t('campaigns.rules')" highlight="#ff6d00"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-bitcointalk.png')" :name="$t('campaigns.title_bitcointalk')" :info="$t('campaigns.bitcointalk')" highlight="#ffd302" />
      </div>
    </div>
    <div class="columns p-l-xl p-r-xl">
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-telegram.png')" :name="$t('campaigns.title_telegram')" :info="$t('campaigns.telegram')" highlight="#36acdd"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-twitter.png')" :name="$t('campaigns.title_twitter')" :info="$t('campaigns.twitter')" highlight="#36acdd"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-token.png')" :name="$t('campaigns.title_claiming')" :info="$t('campaigns.claiming')" highlight="#232C3B"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaderboardCard from "~/components/LeaderboardCard.vue";
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";
import LandingPageJoinCampaign from "~/components/LandingPageJoinCampaign.vue";
import LandingPageMyRewardsCard from "~/components/LandingPageMyRewardsCard.vue";
import CampaignButton from "~/components/CampaignButton.vue";

export default {
  components: {
    LeaderboardCard,
    CampaignInfoCard,
    LandingPageJoinCampaign,
    LandingPageMyRewardsCard,
    CampaignButton
  },
  data() {
    return {
      ready: false,
      isAuthenticated: this.$store.state.user.isAuthenticated
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
