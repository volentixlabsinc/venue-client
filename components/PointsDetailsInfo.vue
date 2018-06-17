<template>
  <div class="card">
    <header class="card-header">
      <h1 class="title">
        Points/ Rewards detailed info
      </h1>
    </header> 
    <div class="card-content">
      <h1 class="subtitle">Total Posts sitewide 
        <span class="tag is-medium is-primary is-inverted">{{ totalPosts }}</span> 
        X {{ multiplier }} = {{ totalPoints }} Points</h1>

      <h1 class="subtitle">Available Reward
        <span class="tag is-medium is-primary is-inverted">{{ availableTokens }}</span> 
        / {{ totalPoints }} Points = 
      <span class="has-text-weight-bold">{{ vtxPerPoint }} VTX per point </span></h1>
      
      <br>
      
      <h1 class="subtitle">Your Total Posts 
        <span class="tag is-medium is-primary is-inverted">{{ myPosts }}</span> 
        X {{ multiplier }} = {{ myPoints }}</h1>
      
      <h1 class="subtitle">Your Total Points 
        <span class="tag is-medium is-primary is-inverted">{{ myPoints }}</span> 
        X {{ vtxPerPoint }} = {{ myTokens }} VTX</h1>
      
      <h1 class="subtitle has-text-weight-bold">{{ position }} bonus + {{ bonus }}% = {{ myTokens }} VTX</h1>
      
      <br>
      
      <h1 class="title has-text-centered">Upcoming points (posts) <br> {{ upComingPostPoints }} Points</h1>
      <h2 class="subtitle has-text-centered">Each post is required to mature for 24 hours (with signature) before points are awarded</h2>
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
      totalPoints: undefined,
      vtxPerPoint: undefined,
      myPoints: undefined,
      myVTX: undefined,
      multiplier: undefined,
      upComingPostPoints: undefined,
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
      await this.$axios
        .get("/retrieve/points-breakdown/")
        .then(result => {
          this.pointsBreakDown = result.data;
          this.populateData();
          console.log("this.pointsBreakDown : ", this.pointsBreakDown);
        })
        .catch(error => {
          this.showError = {
            show: true,
            errorMessage: error
          };
        });
    },
    populateData() {
      let availableRewardsNumber = parseFloat(
        this.availableTokens.replace(/,/g, "")
      );
      this.multiplier = this.pointsBreakDown.settings.post_points_multiplier;
      this.totalPoints = this.pointsBreakDown.sitewide_stats.total_post_points;
      this.totalPosts = this.pointsBreakDown.sitewide_stats.total_posts;
      this.vtxPerPoint = availableRewardsNumber / this.totalPoints;
      this.myPoints = this.pointsBreakDown.user_stats.total_post_points;
      this.myPosts = this.pointsBreakDown.user_stats.total_posts;
      this.position = this.pointsBreakDown.bonus_points[0].position;
      this.bonus = this.pointsBreakDown.bonus_points[0].bonus_percentage;
      this.upComingPostPoints = this.pointsBreakDown.user_stats.upcoming_post_points;
    }
  }
};
</script>
