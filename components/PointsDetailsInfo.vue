<template>
  <div class="card">
    <header class="card-header">
      <h1 class="title">
        Points/ Rewards detailed info
      </h1>
    </header> 
    <div class="card-content  has-text-centered">
      <h1 v-for="(bonus_level, index) in bonus" :key="index" >
        {{ bonus_level.num_posts }} Posts sitewide X {{ 100 + bonus_level.bonus_percentage }} = 
        <u>{{ bonus_level.num_posts * (100 + bonus_level.bonus_percentage) }} Points</u>
      </h1>
      <br>
      <h1 class="title">  {{ totalPoints }} POINTS SITEWIDE</h1>
      <br>
      <h1 class="subtitle"> {{ availableTokens }} Available Reward/ {{ totalPoints }} Points = <br>
      <u> <span class="has-text-weight-bold">{{ vtxPerPoint }} VTX per point </span> </u></h1>
            
      <h1 class="subtitle"> Your Total Posts X {{ multiplier }} = <u>{{ myPoints }} Points </u></h1>
      <h1 class="subtitle">Your Total Points X {{ vtxPerPoint }} = {{ myTokens }} VTX</h1>
      
      <br>
      
      <h1 class="title has-text-centered">Upcoming points (posts) </h1>
      <div class="columns">
        <div class="column is-half">
          <h1 class="title has-text-centered"> {{ upComingPosts }} Posts</h1>
        </div>
        <div class="column is-half">
          <h1 class="title has-text-centered"> {{ upComingPostPoints }} Points </h1>
        </div>
      </div>
      
      <h2 class="subtitle has-text-centered is-italic">Each post is required to mature for 24 hours (with signature) before points are awarded</h2>
    </div>
  
  </div>
</template>

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
      bonus: undefined
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
      this.totalPoints = this.totalPostPoints + this.totalBonusPoints;
      this.totalPosts = this.pointsBreakDown.sitewide_stats.total_posts;
      this.vtxPerPoint = (availableRewardsNumber / this.totalPoints).toFixed(2);
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
