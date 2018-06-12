<template>
  <div> 
    <div class="tokens-info-title">
      <h1 class="title">MY CAMPAIGN ACTIVITY</h1>
    </div>
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
      <div class="tokens-info">
        <h1 class="nb-tokens"><span v-if="$store.state.userStats.user_level">{{ myTokens }}</span><span v-else>N/A</span> VTX</h1>
        <span v-if="bonus > 0" style="width:100%; margin:5px">{{ forumUserRank }} Bonus: {{ bonus }} (included)</span>
        <h1 class="subtitle" style="background-color:rgba(252, 248, 248, 0.05); display: flex; justify-content: space-evenly"><i class="fas fa-star" style="color:#fbc02d"/>  MY CURRENT REWARDS</h1>
      </div>
      <div v-if="dailyStats" class="view-details">
        <a class="button view-details-button" @click="onClickDetails">
          <h3 class="view-details-text">View details</h3>
          <i class="fas fa-search"/>
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
    console.log("myTokens", data);
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
.user-campaign-info {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.view-details-text {
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

.tokens-info {
  margin: 5px 0px 5px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

#token-icon {
  height: 50px;
  margin: 5px;
  padding-right: 10px;
}
.top-section {
  width: 100%;
  height: 100%;
}

.subtitle {
  width: 100%;
  font-size: 25px;
  padding: 0px 10px 0px 15px;
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
}

.nb-tokens {
  font-size: 30px;
  padding: 0px;
  margin: 0px;
  text-align: center;
}
.title {
  display: none;
}

.number-desktop {
  display: none;
}
.card {
  box-shadow: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 0px;
}
.fa-star {
  margin: -10px 0 0 -15px;
  font-size: 1.5em;
  transform: rotate(-10deg);
}
.view-details {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  width: 100%;
}

.view-details-button {
  width: 55%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.1);
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 0px;
  border-radius: 5px;
  white-space: nowrap;
}

.view-details-button:hover {
  background-color: rgba(240, 248, 255, 0.2);
}
.chart {
  display: none;
}

@media only screen and (min-width: 800px) {
  .dashboard-numbers {
    font-size: 45px;
  }

  .user-campaign-info {
    box-shadow: none;
    padding-top: 0px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 0px;
    height: auto;
    padding: 10px;
    margin: 0px;
    order: 2;
  }
  .card {
    /* background-color: #222C3B; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0;
    box-shadow: none;
    padding-bottom: 0px;
  }

  .chart {
    display: initial;
    width: 100%;
    margin-bottom: 10px;
  }

  .tokens-info {
    width: 90%;
  }

  .tokens-info-title {
    margin: 20px 0px 20px 0px;
    width: 100%;
  }
  .nb-tokens {
    font-size: 30px;
    padding: 0px;
    margin: 0px;
  }
  .view-details-text {
    width: 100%;
    white-space: nowrap;
  }
  .top-section {
    /* background-color: #222C3B; */
    height: 50%;
    width: 100%;
    height: 250px;
    padding: 10px;
  }

  .number-desktop {
    display: inherit;
  }

  .view-details {
    width: 90%;
  }

  .view-details-button {
    width: 60%;
  }
}
</style>
