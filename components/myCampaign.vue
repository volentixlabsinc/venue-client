<template>
<div class="my-campaign">
    <div class="my-campaign-info-container">
         <div class="my-campaign_info clickable-section" @click="onClickLeaderboard">
           <h1 class="dashboard-numbers"><ICountUp
            :startVal="50"
            :endVal="myRank"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">MY RANK</h4>
        </div>

        <div class="my-campaign_info clickable-section" @click="onClickDetails">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="myPosts+20"
            :endVal="myPosts"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">MY POSTS</h4>
        </div>
        <div class="my-campaign_info clickable-section" @click="onClickDetails">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="0"
            :endVal="myPoints"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">MY POINTS</h4>
        </div>
    </div>
    <div class="tokens-info clickable-section" @click="onClickDetails">
      <h2 class="subtitle" style="">MY CURRENT REWARDS</h2>
      <h2 class="nb-tokens">{{myTokens}} VTX</h2>
    </div>
    <div class="view-details">
        <button class="btn view-details-button clickable-section" @click="onClickDetails">
        <h3 class="view-details-text">View details</h3>
        <a><i class="fas fa-search"></i></a>
        </button>
    </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  data () {
    return {
      // TODO this should be at profile level, but API doesn't return it
      myRank: this.$store.state.userStats.user_level.overall_rank,
      myPosts: this.$store.state.userStats.profile_level[0].numPosts,
      myPoints: this.$store.state.userStats.profile_level[0].totalPoints,
      myTokens: this.$store.state.userStats.profile_level[0].VTX_Tokens,
      options: {
          useEasing: true,
          useGrouping: false,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
    }
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push('/leaderboard')
    },
    onClickDetails() {
        this.$router.push('/points-details')
      },
  },
  components: {
    ICountUp,
  }
}  
</script>

<style scoped>
.my-campaign{
  height:auto;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top:10px;
  padding-bottom: 15px;
}

.my-campaign-title{
  width: 100%;
}
.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
}
.dashboard-numbers {
   color: rgba(255, 255, 255, 0.541);
  width: 100%;
  font-weight: bolder;
  font-size: 45px;
  padding: 0px;
  padding-top: 5px;
  margin: 0px;
  line-height:1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}

.my-campaign-info-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.my-campaign_info{
 width: 30%;
 min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1px;
  background-color: rgba(252, 248, 248, 0.05);
  border-radius: 3px;
}


.my-campaign_info>h2{
  margin: 0px;
}
.tokens-info{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 20px;
}

.subtitle, .nb-tokens {
  background-color:rgba(252, 248, 248, 0.05);
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
}

.subtitle { width: 70%; margin-right: 2px; }
.nb-tokens{ width: 30%;}

.view-details {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: flex-end;
    width: 100%;
}

.view-details-button {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    background-color: rgba(240, 248, 255, 0.1);
    padding: 0px;
    margin: 5px 0px 0px -5px;
    border-radius: 5px;
}

.view-details-button:hover{
    background-color: rgba(240, 248, 255, 0.2);
}

.view-details-text {
    padding: 0px;
    margin: 10px;
    text-align: left;
    white-space: nowrap;
}

.clickable-section:hover{
  cursor: pointer;
}
@media only screen and (min-width: 800px) {

  .my-campaign{
  order:1;
  margin-top:0px;
  padding: 0px;
}
.tokens-info{
  width: 91%;
}

 .view-details {
    width: 90%;
    align-self: center;
}
.subtitle, .nb-tokens {
  font-size: 25px;
}
}
</style>