<template>
  <div class="m-lg">
    <div class="columns">
      <div class="column is-two-fifths">
        <LeaderboardCard :paginated="false" :limit="5" :detailed="false"/>
      </div>
      <div class="column">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CUSy7bVnnVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/></div>
    </div>
    <h2 class="title">{{ $t('titles.campaigns') }}</h2>
    <div class="columns">
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-rules.png')" :name="$t('campaigns.title_rules')" :info="$t('campaigns.rules')" link="https://venue.ninja/rules/" highlight="#ff6d00"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-youtube-blog.png')" :name="$t('campaigns.title_youtube')" :info="$t('campaigns.youtube')" link="https://venue.ninja/youtube-blog-article-campaign/" highlight="#fc0514"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-bitcointalk.png')" :name="$t('campaigns.title_bitcointalk')" :info="$t('campaigns.bitcointalk')" :new-tab="false" link="/onboarding/bitcointalk" highlight="#ffd302" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-telegram.png')" :name="$t('campaigns.title_telegram')" :info="$t('campaigns.telegram')" link="https://venue.ninja/telegram-campaign-rules/" highlight="#36acdd"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-twitter.png')" :name="$t('campaigns.title_twitter')" :info="$t('campaigns.twitter')" link="https://venue.ninja/twitter-campaign-rules/" highlight="#687987"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-community.png')" :name="$t('campaigns.title_community')" :info="$t('campaigns.community')" link="https://bitcointalk.org/index.php?topic=5048604.0" highlight="#51b675"/>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-token.png')" :name="$t('campaigns.title_claiming')" :info="$t('campaigns.claiming')" link="https://venue.ninja/claiming-vtx-section/" highlight="#232C3B"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-valoro.png')" :name="$t('campaigns.title_valoro')" :info="$t('campaigns.valoro')" link="https://valoro.io/" highlight="#ffae00"/>
      </div>
      <div class="column">
        <CampaignButton :image="require('@/assets/socialMedia-comingsoon.png')" :name="$t('campaigns.title_coming_soon')" :info="$t('campaigns.coming_soon')" :height="64" :width="85" link="https://volentix.io/#roadmap " highlight="#bd090c"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaderboardCard from "~/components/LeaderboardCard.vue";
import CampaignButton from "~/components/CampaignButton.vue";

export default {
  components: {
    LeaderboardCard,
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

iframe {
  width: 100%;
  height: 100%;
}
</style>
