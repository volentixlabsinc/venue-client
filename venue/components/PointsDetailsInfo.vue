<template>
  <div class="box">
    <h1 class="title has-text-centered text-transform-uppercase">{{ $t('points_details.title') }}</h1>
    <hr >
    <div v-show="loaded" class="has-text-centered">
      <h1 v-for="(bonus_level, index) in bonus" :key="index" >
        {{ bonus_level.num_posts }} posts sitewide X {{ 100 + bonus_level.bonus_percentage }} = 
        <u>{{ bonus_level.num_posts * (100 + bonus_level.bonus_percentage) }} Points</u>
      </h1>
      <div class="is-size-3 m-md">{{ totalPoints }} POINTS SITEWIDE</div>
      <div class="subtitle"> {{ availableTokens }} available reward / {{ totalPoints }} points =
      <u><span class="has-text-weight-bold">{{ vtxPerPoint }} VTX per point</span></u></div>
            
      <div class="box">
        <div class="is-size-5">Your total posts X {{ multiplier }} = <u>{{ myPoints }} points </u></div>
        <div class="is-size-5">Your total points X {{ vtxPerPoint }} = {{ myTokens }} VTX</div>
      </div>

      <div class="has-text-left is-size-6">
        <span class="icon has-text-warning is-medium">
          <i class="fas fa-exclamation-triangle fa-lg"/>
        </span>
        {{ $t('messages.signature_warning_1') }}
        <strong>{{ $t('messages.signature_warning_2') }}</strong>{{ $t('messages.signature_warning_3') }}
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  data() {
    const data = {
      totalPostPoints: 0,
      totalBonusPoints: 0,
      totalPoints: 0,
      vtxPerPoint: 0,
      myPoints: 0,
      myVTX: 0,
      multiplier: 0,
      totalPosts: 0,
      position: "",
      bonus: 0,
      myTokens: -1,
      availableTokens: -1,
      loaded: false
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        availableTokens: numeral(
          this.$store.state.leaderboard.sitewide.available_tokens
        ).format()
      });
    }
    return data;
  },
  mounted() {
    this.fetchPointsBreakDown();
  },
  methods: {
    async fetchPointsBreakDown() {
      const pointsBreakdown = await this.$axios.$get(
        "/retrieve/points-breakdown/"
      );
      let availableRewardsNumber = parseFloat(
        this.availableTokens.replace(",", "")
      );
      this.multiplier = pointsBreakdown.settings.post_points_multiplier;
      this.totalPostPoints = pointsBreakdown.sitewide_stats.total_post_points;
      this.totalBonusPoints = pointsBreakdown.sitewide_stats.total_bonus_points;
      this.totalPointsNum = this.totalPostPoints + this.totalBonusPoints;
      this.totalPoints = numeral(this.totalPointsNum).format();
      this.totalPosts = pointsBreakdown.sitewide_stats.total_posts;
      this.vtxPerPoint = (availableRewardsNumber / this.totalPointsNum).toFixed(
        2
      );
      this.myPoints = pointsBreakdown.user_stats.total_post_points;
      this.bonus = pointsBreakdown.sitewide_stats.bonus_points;
      this.loaded = true;
    }
  }
};
</script>

<style scoped>
div.box div.box {
  background-color: #e0e5e9;
}
</style>
