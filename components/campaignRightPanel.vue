<template>
<div class="all-campaigns">
        <div class="campaign-info-container" >
          <h2 class="campaign-title">BITCOINTALK CAMPAIGN</h2>
         </div>
       <div class="campaigns-numbers-container" @click="onClickLeaderboard">
        <div class="campaigns-number-card">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="0"
            :endVal="totalUsers"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">PARTICIPANTS</h4>
        </div>
        <div class="campaigns-number-card">
          <h1 class="dashboard-numbers">
            <ICountUp
            :startVal="0"
            :endVal="totalPosts"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">TOTAL POSTS</h4>
        </div>
         </div>
        <div>
            <h1 class="nb-tokens">{{availableTokens}} VTX</h1>
            <h1 class="available-rewards"><i class="fas fa-star" style="color:#fbc02d"></i>AVAILABLE REWARDS</h1>
          </div>
        <div class="leaderboard-container">
             <h2 class="campaign-title" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"></i></h2>
        <leaderboard :shortenedLeaderboard="true" />
        </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import leaderboard from '~/components/leaderboard/index.vue'
export default {
  
  data () {
    return {
      totalUsers: this.$store.state.leaderboard.sitewide.total_users,
      totalPosts: this.$store.state.leaderboard.sitewide.total_posts,
      availableTokens: this.$store.state.leaderboard.sitewide.available_tokens,
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
    }
  },
  components: {
    ICountUp,
    leaderboard
  }
}  
</script>

<style scoped>

.all-campaigns {
  height:auto;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
 padding-top: 10px;
 padding-bottom: 30px;
 margin-bottom: 10%;
 background-image: linear-gradient(to bottom,  rgba(0, 0, 0, 0.3), #494B5E);
}

.all-campaigns:hover{
  cursor: pointer;
}
.leaderboard-container{
  display:none;
}

.campaign-title{
    font-size: 20px;
    width:100%;
    padding-bottom: 10px;
    border-bottom: 0.5px solid #92A5C1;
}

.campaigns-numbers-container{
  display: flex;
  flex-direction: row;
}
.campaign-info-container{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
}

#token-icon {
  height:45px;
  margin:5px;
}
.campaigns-number-card {
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
  line-height:1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}
.tokens-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
}

.available-rewards{
  width: 100%;
  font-size: 25px;
  padding: 0px 10px 0px 15px;
  margin: 0px;
  display: flex;
  justify-content: space-evenly;
  text-align:center;
  background-color:rgba(252, 248, 248, 0.05);
  
}

.fa-star {
    margin:-10px 0 0 -15px;
    font-size: 1.5em;
    transform: rotate(-10deg)
}
.fa-chevron-right{
  padding-left: 20px;
}
@media only screen and (min-width: 600px) {
.all-campaigns{
  margin-bottom: 5%;
}
}

@media only screen and (min-width: 800px) {
.all-campaigns{
  height: auto;
  flex-direction: column;
  justify-content:space-evenly;
  align-items:center;
  padding: 0px;
  margin-bottom: 0px;
  background-color:transparent;
  background-image: none;
}
.all-campaigns:hover{
  cursor: pointer;
}

.campaign-info-container{
  display: flex;
  flex-direction: column;
  box-shadow: none;
  width: 90%;
  border-radius:3px;
  height: auto;
  padding: 0px;
  margin: 0px;
}

.info-subtitles {
  font-size:14px;
}
.nb-tokens{
  font-size: 30px;
  margin-bottom: 5px;
}

#token-icon {
  height:60px;
  padding-right: 5px; 
}
.campaigns-number-card {
  width: 50%;
  margin-top: 4px;
}
.dashboard-numbers {
  font-size: 45px;
}
.available-rewards{
  width: 90%;
}
.leaderboard-container{
  padding-top: 20px;
  width: 90%;
  max-height: 500px;
  display: inherit;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-face-color: #367CD2;
  scrollbar-shadow-color: #FFFFFF;
  scrollbar-highlight-color: #FFFFFF;
  scrollbar-3dlight-color: #FFFFFF;
  scrollbar-darkshadow-color: #FFFFFF;
  scrollbar-track-color: #FFFFFF;
  scrollbar-arrow-color: #FFFFFF;
  padding-bottom:50px;
}

.leaderboard-container::-webkit-scrollbar {
    width: 0px;
}

/* Track */
.leaderboard-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.leaderboard-container::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0); 
}

}

@media only screen and (min-width: 1200px) {
.campaign-info-container{
  margin-bottom: 0px;
}

.campaigns-numbers-container{
  width: 90%;
  padding: 0px;
  margin: 0px;
}

}
</style>