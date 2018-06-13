<template>
  <div>
    <div class="campaign_info-container">
      <div class="campaigns_info">
        <h1 class="dashboard-numbers">
          <img id="trophy" src="/img/svg/trophy2.svg">
          <ICountUp v-if="rank"
                    :start-val="0"
                    :end-val="Number(rank)"
                    :decimals="0"
                    :duration="2.5"
                    :options="options"/>
          <span v-else>N/A</span>
        </h1>
        <h4 class="info-subtitles">MY RANK</h4>
      </div>

      <div class="campaigns_info">
        <h1 class="dashboard-numbers">
          <ICountUp
            :start-val="0"
            :end-val="Number(totalUsers)"
            :decimals="0"
            :duration="2.5"
            :options="options"/>
        </h1>
        <h4 class="info-subtitles">PARTICIPANTS</h4>
      </div>

      <div class="campaigns_info">
        <h1 class="dashboard-numbers">
          <ICountUp
            :start-val="0"
            :end-val="Number(totalPosts)"
            :decimals="0"
            :duration="2.5"
            :options="options"/>
        </h1>
        <h4 class="info-subtitles">TOTAL POSTS</h4>
      </div>
     
    </div> 

        
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import forumStatsPosts from "~/components/forumActivity/forumStatsPosts";

export default {
  components: {
    ICountUp,
    forumStatsPosts
  },
  data() {
    return {
      rank: this.$store.state.userStats.user_level
        ? this.$store.state.userStats.user_level.overall_rank
        : undefined,
      totalUsers: this.$store.state.leaderboard.sitewide.total_users,
      totalPosts: this.$store.state.leaderboard.sitewide.total_posts,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
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

.campaigns_info {
  width: 50%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1px;
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

#trophy {
  height: 50px;
  transform: rotate(-10deg);
  margin: -50px 0 0 -25px;
}

@media only screen and (min-width: 800px) {
  #trophy {
    height: 55px;
    margin: -50px 10px 0 -55px;
  }
}
</style>
