<template>
  <div class="main-section">
      <h2 class="section-title">BITOINTALK SIGNATURE CAMPAIGN</h2>
        <div class="stats-container">
            <campaign-stats :campaignStats="campaignStats" :localStats="localStats" :elements="data.rankings"/>
        </div>
      <div class="card leaderboard-container">
          <leaderboard />
      </div>

  </div>
</template>

<script>
import leaderboard from '../../components/leaderboard/index.vue';
import campaignStats from './campaignStats.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import {retrieveStats } from '../../service/dashboard';
import {retrieveUser } from '../../service/account';
import ICountUp from 'vue-countup-v2';



export default {
  data() {
      return {
          
          data: {},
          datacollectionPosts:{},
          datacollectionUsers:{},
          user: {},
          userStats: {},
          campaignStats: {},
        
          localStats: {
              myActivity: '',
              myRanking: '',
              totalUsers: '',
              totalPosts: ''
          },
        
           
      }
  },
mounted(){
    getLeaderBoardData()
            .then(response => {
                this.data = response;        
                console.log('this.data', this.data)        
                
            })
            .catch(ex => {
                console.error(ex);
            })
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
        this.localStats = {
            myRanking: this.userStats.overall_rank,
            totalUsers:  this.campaignStats.total_users,
            totalPosts: this.campaignStats.total_posts,
            myActivity:  this.userStats.total_posts,
        }
        }
    },
  components: {
    leaderboard,
    ICountUp,
    campaignStats
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

.stats-container {
    width: 100%;
    height: 30%;
}
@media only screen and (min-width: 800px) {
.main-section {
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: space-around;
      align-items: flex-start;
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
.stats-container {
    width: 40%;
    order:2;
}
.leaderboard-container * {
     width:100%;
 }

.leaderboard-container {
    order: 1;
    width: 50% ;
    padding:0px;
    height: 80%;
    margin:0px;
    justify-content: flex-start;
    align-items: flex-start;

}

}
</style>