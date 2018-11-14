<template>
  <div class="box">
    <h1 class="title has-text-centered text-transform-uppercase">{{ $t('points_details.title') }}</h1>
    <hr >
    <div v-show="loaded" class="has-text-centered">
      <h1 v-for="(bonus_level, index) in bonus" :key="index">
        {{ $tc('points_details.posts_sitewide', bonus_level.num_posts, { count: bonus_level.num_posts }) }}
        X {{ 100 + bonus_level.bonus_percentage }} =
        <u>{{ $tc('points_details.points', calcPoints(bonus_level.num_posts, bonus_level.bonus_percentage),
                  { count: calcPoints(bonus_level.num_posts, bonus_level.bonus_percentage) }) }}</u>
      </h1>
      <div class="is-size-3 m-md">
        {{ $tc('points_details.points_sitewide', totalPoints, { count: totalPoints }) }}
      </div>
      <div class="subtitle">
        {{ $t('points_details.vtx_per_points', { count: availableTokens }) }} / {{ $t('points_details.points', { count: totalPoints }) }} =
        <u><span class="has-text-weight-bold">{{ $t('points_details.vtx_per_points', { count: vtxPerPoint }) }}</span></u>
      </div>

      <div class="box">
        <div class="is-size-5">
          {{ $t('points_details.your_total_posts') }} X {{ calcMultiplier(mybonusPercentage) }} = <u>{{ $t('points_details.points', { count: myPoints }) }}</u>
        </div>
        <div class="is-size-5">
          {{ $t('points_details.your_total_points') }} X {{ vtxPerPoint }} = {{ myTokens }} VTX
        </div>
      </div>

      <div class="has-text-left is-size-6">
        <span class="icon has-text-warning is-medium">
          <i class="fas fa-exclamation-triangle fa-lg"/>
        </span>
        {{ $t('messages.signature_warning_1') }}
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
      this.$auth.loggedIn && this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        availableTokens: numeral(
          this.$store.state.leaderboard.sitewide.available_tokens
        ).format(),
        myPoints: this.$store.state.userStats.profile_level[0].totalPoints,
        mybonusPercentage: this.$store.state.userStats.profile_level[0]
          .rankBonusPercentage
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
      this.totalPostPoints = pointsBreakdown.sitewide_stats.total_post_points;
      this.totalBonusPoints = pointsBreakdown.sitewide_stats.total_bonus_points;
      this.totalPointsNum = this.totalPostPoints + this.totalBonusPoints;
      this.totalPoints = this.totalPointsNum;
      this.totalPosts = pointsBreakdown.sitewide_stats.total_posts;
      this.vtxPerPoint =
        this.totalPointsNum === 0
          ? 0
          : (availableRewardsNumber / this.totalPointsNum).toFixed(2);
      this.bonus = pointsBreakdown.sitewide_stats.bonus_points;
      this.loaded = true;
    },
    calcPoints(numPosts, bonus) {
      return numPosts * (100 + bonus);
    },
    calcMultiplier(bonusPercentage) {
      return 100 * (1 + bonusPercentage / 100);
    }
  }
};
</script>

<style scoped>
div.box div.box {
  background-color: #e0e5e9;
}
</style>
