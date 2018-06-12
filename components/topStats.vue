<template>
     <div>
              <div class="campaign_info-container">
                <div class="campaigns_info">
                        <h1 class="dashboard-numbers">
                            <img id="trophy" src="/img/svg/trophy2.svg"/>
                            <ICountUp v-if="rank"
                            :startVal="0"
                            :endVal="Number(rank)"
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
                        :startVal="0"
                        :endVal="Number(totalUsers)"
                        :decimals="0"
                        :duration="2.5"
                        :options="options"/>
                    </h1>
                    <h4 class="info-subtitles">PARITICIPANTS</h4>
                </div>

                <div class="campaigns_info">
                    <h1 class="dashboard-numbers">
                        <ICountUp
                        :startVal="0"
                        :endVal="Number(totalPosts)"
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
  },
  components: {
    ICountUp,
    forumStatsPosts
  }
};
</script>

<style scoped>
.card {
  box-shadow: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.my-signature {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

.signature-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
}
.signature-title-text {
  padding: 0px;
  margin: 10px;
  text-align: left;
}
.campaign_info-container {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-subtitles {
  padding: 0px;
  margin: 0px;
  padding-top: 5px;
  color: rgba(255, 255, 255, 0.541);
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

.tokens-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#token-icon {
  height: 60px;
  margin: 5px;
}
.top-section {
  width: 100%;
  height: 100%;
}
.nb-tokens {
  width: 100%;
  font-size: 40px;
  padding: 0px;
  margin: 0px;
  text-align: center;
}
.number-desktop {
  display: none;
}

#trophy {
  height: 50px;
  transform: rotate(-10deg);
  margin: -50px 0 0 -25px;
}
.bottom-section {
  background-color: #222c3b;
  margin-top: 5%;
  width: 100%;
  height: 250px;
  padding: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
@media only screen and (min-width: 800px) {
  .dashboard-numbers {
    font-size: 45px;
  }

  .card {
    padding-top: 0px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 10px;
    height: auto;
    margin: 0px;
    order: 2;
  }
  .bottom-section {
    background-color: #222c3b;
    margin-top: 5%;
    width: 100%;
    height: 250px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .tokens-info {
    width: 50%;
  }
  .tokens-info-title {
    width: 100%;
  }
  .nb-tokens {
    font-size: 35px;
    padding: 0px;
    margin: 0px;
  }
  .my-signature {
    width: 100%;
  }
  .top-section {
    background-color: #222c3b;
    height: 50%;
    width: 100%;
    height: 250px;
    padding: 10px;
  }
  #trophy {
    height: 55px;
    margin: -50px 10px 0 -55px;
  }
  .number-desktop {
    display: inherit;
  }
}
</style>

<style>
#pie-chart {
  margin: 0px !important;
  padding: 0px !important;
  width: 150px !important;
  height: 150px !important;
  align-self: center;
}
canvas {
  margin: 0px !important;
  padding: 0px !important;
  display: flex !important;
}
</style>
