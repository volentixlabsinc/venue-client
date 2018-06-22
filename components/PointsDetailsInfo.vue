<template>
  <div>
    <h1 class="title">POINTS / REWARDS DETAILED INFO</h1>
    <div class="has-text-centered">
      <h1 v-for="(bonus_level, index) in bonus" :key="index" >
        {{ bonus_level.num_posts }} posts sitewide X {{ 100 + bonus_level.bonus_percentage }} = 
        <u>{{ bonus_level.num_posts * (100 + bonus_level.bonus_percentage) }} Points</u>
      </h1>
      <div class="is-size-3 m-md">{{ totalPoints }} POINTS SITEWIDE</div>
      <div class="subtitle"> {{ availableTokens }} available reward / {{ totalPoints }} points =
      <u><span class="has-text-weight-bold">{{ vtxPerPoint }} VTX per point</span></u></div>
            
      <div class="is-size-5">Your total posts X {{ multiplier }} = <u>{{ myPoints }} points </u></div>
      <div class="is-size-5">Your total points X {{ vtxPerPoint }} = {{ myTokens }} VTX</div>
      
      <h2 class="title is-title-2 m-t-lg">Upcoming points (posts) </h2>
      <div class="level">
        <span class="level-item is-size-4">{{ upComingPosts }} Posts</span>
        <span class="level-item is-size-4">{{ upComingPostPoints }} Points</span>
      </div>
      
      <div class="is-size-5 is-italic">Each post is required to mature for 24 hours (with signature) before points are awarded</div>
    </div>
</div></template>

<script>
import numeral from "numeral";

export default {
  data() {
    const data = {
      pointsBreakDown: null,
      showError: {
        show: false,
        errorMessage: ""
      },
      totalPostPoints: undefined,
      totalBonusPoints: undefined,
      totalPoints: undefined,
      vtxPerPoint: undefined,
      myPoints: undefined,
      myVTX: undefined,
      multiplier: undefined,
      upComingPostPoints: undefined,
      upComingPosts: undefined,
      totalPosts: undefined,
      myPosts: undefined,
      position: undefined,
      bonus: undefined,
      myTokens: -1,
      availableTokens: -1
    };
    if (this.$store.state.user.isAuthenticated) {
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
      const ptsBreakdownFetch = await this.$axios.get(
        "/retrieve/points-breakdown/"
      );
      if (ptsBreakdownFetch.statusText === "OK") {
        this.pointsBreakDown = ptsBreakdownFetch.data;
        this.populateData();
      } else {
        this.showError = {
          show: true,
          errorMessage: "An error has occured"
        };
      }
    },
    populateData() {
      let availableRewardsNumber = parseFloat(
        this.availableTokens.replace(",", "")
      );
      this.multiplier = this.pointsBreakDown.settings.post_points_multiplier;
      this.totalPostPoints = this.pointsBreakDown.sitewide_stats.total_post_points;
      this.totalBonusPoints = this.pointsBreakDown.sitewide_stats.total_bonus_points;
      this.totalPointsNum = this.totalPostPoints + this.totalBonusPoints;
      this.totalPoints = numeral(this.totalPointsNum).format();
      this.totalPosts = this.pointsBreakDown.sitewide_stats.total_posts;
      this.vtxPerPoint = (availableRewardsNumber / this.totalPointsNum).toFixed(
        2
      );
      this.myPoints = this.pointsBreakDown.user_stats.total_post_points;
      this.myPosts = this.pointsBreakDown.user_stats.total_posts;
      this.upComingPostPoints = this.pointsBreakDown.user_stats.upcoming_post_points;
      this.upComingPosts = this.pointsBreakDown.user_stats.upcoming_posts;
      this.bonus = this.pointsBreakDown.sitewide_stats.bonus_points;
      this.upComingPostPoints = this.pointsBreakDown.user_stats.upcoming_post_points;
      this.upComingPosts = this.pointsBreakDown.user_stats.upcoming_posts;
    }
  }
};
</script>
