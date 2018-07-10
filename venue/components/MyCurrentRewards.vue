<template>
  <div>
    <div class="is-size-3 has-text-centered">
      <span v-if="hasCampaignData" class="is-size-3 has-text-centered">{{ myTokens }}</span>
      <span v-else>N/A</span> VTX
    </div>
    <span v-if="bonus > 0" style="width:100%; margin:5px">{{ forumUserRank }} Bonus: {{ bonus }} (included)</span>
    <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>MY CURRENT REWARDS</div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    showDetailsButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const hasCampaignData = this.$store.state.userStats.hasCampaignData;
    const data = {
      hasCampaignData,
      bonus: 0,
      myTokens: 0
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasCampaignData && hasStats) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        forumUserRank: this.$store.state.userStats.profile_level[0]
          .forumUserRank
      });
    }
    return data;
  }
};
</script>
