<template>
  <div> 
    <div>
      <div v-if="isAuthenticated" class="chart"> 
        <forum-chart :width="450" :height="300" />
      </div>
      <div class="campaigns-info-container">
        <div class="campaigns_info number-desktop">
          <h1 class="dashboard-numbers" @click="onClickDetails">
            <ICountUp v-if="isAuthenticated"
                      :start-val="0"
                      :end-val="Number(myPosts)"
                      :decimals="0"
                      :duration="2.5"
                      :options="options"/>
            <span v-else>N/A</span>
          </h1>
          <h4 class="info-subtitles">MY POSTS</h4>
        </div>
        <div class="campaigns_info number-desktop">
          <h1 class="dashboard-numbers" @click="onClickDetails">
            <ICountUp v-if="isAuthenticated && myPoints >= 0"
                      :start-val="0"
                      :end-val="Number(myPoints)"
                      :decimals="0"
                      :duration="2.5"
                      :options="options"/>
            <span v-else>N/A</span>
          </h1>
          <h4 class="info-subtitles">MY POINTS</h4>
        </div>
      </div>
      <div>
        <div class="is-size-3 has-text-centered">
          <span v-if="$store.state.userStats.user_level" class="is-size-3 has-text-centered">{{ myTokens }}</span>
          <span v-else>N/A</span> VTX
        </div>
        <span v-if="bonus > 0" style="width:100%; margin:5px">{{ forumUserRank }} Bonus: {{ bonus }} (included)</span>
        <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>  MY CURRENT REWARDS</div>
      </div>

      <div v-if="dailyStats" class="view-details">
        <a class="button is-info is-outlined" @click="onClickDetails">
          <span>View details</span><span class="icon"><i class="fas fa-search"/></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import ForumChart from "~/components/forumActivity/ForumChart.vue";

export default {
  components: {
    ICountUp,
    ForumChart
  },
  data() {
    const data = {
      isAuthenticated: this.$store.state.user.isAuthenticated,
      bonus: 0,
      dailyStats: [],
      myPosts: 0,
      myPoints: null,
      myTokens: 0,
      forumUserRank: "",
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
    if (
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.user_level
    ) {
      Object.assign(data, {
        dailyStats: this.$store.state.userStats.user_level.daily_stats,
        myPosts: this.$store.state.userStats.profile_level[0].numPosts,
        myPoints: this.$store.state.userStats.profile_level[0].totalPoints,
        myTokens: this.$store.state.userStats.profile_level[0].VTX_Tokens,
        forumUserRank: this.$store.state.userStats.profile_level[0]
          .forumUserRank
      });
    }
    return data;
  },

  methods: {
    onClickDetails() {
      this.$router.push("/points-details");
    }
  }
};
</script>

<style scoped>
.campaign_info-container {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.campaigns-info-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.campaigns_info {
  width: 45%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px 1px 5px 1px;
  background-color: rgba(252, 248, 248, 0.05);
  border-radius: 3px;
  padding: 2px;
}

.dashboard-numbers {
  color: rgba(255, 255, 255, 0.541);
  width: 100%;
  font-weight: bolder;
  font-size: 50px;
  padding: 0px;
  padding-top: 5px;
  margin: 0px;
  line-height: 1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}
</style>
