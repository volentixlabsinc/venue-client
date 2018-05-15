<template>
  <div class="main-section">
      
      <div class="card user-campaign-info">
           <h2 class="section-title">BITOINTALK SIGNATURE CAMPAIGN</h2>
           <div class="tokens-info">
                <img id="token-icon" src="/img/logos/VTX-Token-icon.png"/>
                <h1 class="nb-tokens">{{campaignStats.available_tokens}} VTX</h1>
            </div>
           <div class="my-signature">
            <div class="signature-title">
           <h3 class="signature-title-text">CURRENT SIGNATURE</h3>
           <a  @click="onClickSignautre"><i class="far fa-edit"></i></a>
           </div>
           <p v-if="signature">user signature</p>
           <img v-else class="signature-img" src="/img/onboarding/sig5.png">
           </div>
           <div class="campaign_info-container">
                <div class="campaigns_info">
                    <h1 class="dashboard-numbers">
                        <ICountUp
                        :startVal="0"
                        :endVal="Number(this.totalUsers)"
                        :decimals="0"
                        :duration="2.5"
                        :options="options"/>
                    </h1>
                    <h4 class="info-subtitles">PARTICIPANTS</h4>
                </div>
          
          <div class="campaigns_info">
                <h1 class="dashboard-numbers">
                    <ICountUp
                    :startVal="0"
                    :endVal="Number(this.totalPosts)"
                    :decimals="0"
                    :duration="2.5"
                    :options="options"/>
                </h1>
            <h4 class="info-subtitles">POSTS</h4>
          </div>
           <div class="campaigns_info">
                <h1 class="dashboard-numbers">
                    <ICountUp
                    :startVal="0"
                    :endVal="Number(this.myRanking)"
                    :decimals="0"
                    :duration="2.5"
                    :options="options"/>
                </h1>
            <h4 class="info-subtitles">MY RANK</h4>
          </div>
          <div class="campaigns_info">
            <h1 class="dashboard-numbers">
                <ICountUp
                :startVal="0"
                :endVal="Number(this.myActivity)"
                :decimals="0"
                :duration="2.5"
                :options="options"/>
            </h1>
            <h4 class="info-subtitles">MY POSTS</h4>
          </div>
        </div>
          
    
      </div>
      <div class="card leaderboard-container">
          <leaderboard />
      </div>
  </div>
</template>

<script>
import leaderboard from '../../components/leaderboard/index.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import {retrieveStats } from '../../service/dashboard';
import {retrieveUser } from '../../service/account';
import ICountUp from 'vue-countup-v2';



export default {
  data() {
      return {
          signature: false,
          data: {},
          datacollectionPosts:{},
          datacollectionUsers:{},
          user: {},
          userStats: {},
          campaignStats: {},
          myRanking:'',
          totalUsers:'',
          totalPosts: '',
          myActivity: '',
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
mounted(){
    retrieveUser()
    .then(response => {
        this.user = response
    });
    retrieveStats()
    .then(response => {
        this.userStats = response.stats.user_level;
        this.campaignStats = response.stats.sitewide;
    })
    .then( response => {
        this.populateUserData()
        });
      
    },
    methods: { 
    onClickSignautre() {
        this.$router.push('/signature')
      },
    populateUserData() {
        this.myRanking = this.userStats.overall_rank;
        this.totalUsers =  this.campaignStats.total_users;
        this.totalPosts =  this.campaignStats.total_posts;
        this.myActivity =  this.userStats.total_posts;

        }
    },
  components: {
    leaderboard,
    ICountUp
    }
}
</script>

<style scoped>
.main-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    overflow-x: scroll;
    overflow-x: hidden;
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
    padding-bottom:10%;
}

.main-section::-webkit-scrollbar {
    width: 0px;
}

/* Track */
.main-section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(0,0,0,0.2); 
  -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0); 
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}
 
/* Handle */
.main-section::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0); 
}

.section-title {
    font-weight: 500;
    text-shadow: 3px 3px 5px #824363;
    width: 100%;
    text-align: center;
}

.user-campaign-info {
    height: 50%;
    width: 100% ;
    height: auto;
    padding-top: 5%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.my-signature{
    width: 100%;
    display: flex;
    flex-direction:column;
    padding-bottom: 30px;
}

.my-signature > img {
    width: 98%;
    align-self: center;
}
.signature-img{
    padding-top: 10px;
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
  line-height:1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}
.leaderboard-container {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
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

.tokens-info{
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#token-icon {
  height:60px;
  margin:5px;
}

.nb-tokens{
  font-size: 40px;
}
@media only screen and (min-width: 800px) {
.main-section {
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: space-around;
      align-items: center;
      padding-bottom:0;
}
.card {
    box-shadow: none;
}

.section-title {
     font-size: 35px;
    font-weight: 500;
    width: 100%;
    border-bottom: 1px solid white;
    margin-bottom: 0px;
}
.signature-img{
    padding-top: 0px;
}
 .leaderboard-container, .user-campaign-info {
    width: 60% ;
    height: auto;
    padding: 10px;
    margin:0px;
}
 .leaderboard-container * {
     width:100%;
 }

.leaderboard-container {
    padding:0px;
    min-height: 50%;
}


.dashboard-numbers {
  font-size: 45px;
}

.user-campaign-info { 
    padding-top: 0px;
    flex-direction: column;
    justify-content:space-around;
    align-items:flex-start;
     padding-bottom: 0px;
}

 }
</style>