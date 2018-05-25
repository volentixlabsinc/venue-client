<template>
  <div class="main-section">
      <h2 class="section-title">BITOINTALK SIGNATURE CAMPAIGN</h2>
      <div class="top-left">
          <top-stats v-if="campaignStats.total_users>0" :campaignStats="campaignStats" :localStats="localStats"/>  
          <leaderboard />
      </div>
        <div class="stats-container">
            <user-stats
            v-if="userStats.total_posts>=0"
            :campaignStats="campaignStats"
            :localStats="localStats"
            :elements="data.rankings"
            :dataCollection="dataCollection"/>
            <edit-signature-button />
        </div>
  </div>
</template>

<script>
import leaderboard from '../../components/leaderboard/index.vue';
import userStats from './userStats.vue';
import topStats from './topStats.vue';
import editSignatureButton from './editSignatureButton.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import {retrieveStats } from '../../service/dashboard';
import {retrieveUser } from '../../service/account';
import ICountUp from 'vue-countup-v2';



export default {
  data() {
      return {
          
          data: {},
          dataCollection:{},
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
    console.log('>>>>>>>>>>>>>>>> campaignStats', this.campaignStats);
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
        this.userStats = response.stats.user_level; //profile_level_global
        this.campaignStats = response.stats.sitewide; //sitewide
        this.profile_level_forum = response.stats.profile_level
    })
    .then( response => {
        this.populateUserData();
        this.fillChartData();
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
        },
    fillChartData() {
        let numberOfPosts = [];
        let dates = [];
        let splitDate = '';
        let rankPostion = [];
          for (var i =0; i < this.userStats.daily_stats.length; i++){
            numberOfPosts.push(this.userStats.daily_stats[i].posts);
            rankPostion.push(this.userStats.daily_stats[i].rank);
            splitDate = this.userStats.daily_stats[i].date.split('-');
            dates.push(`${splitDate[1]}-${splitDate[2]}`); 
          }
          
        this.dataCollection = {
         labels: dates,
          datasets: [
            {
              label: 'Number of Posts',
              lineTension: 0.01,
              backgroundColor: 'rgba(133, 68, 154, 0.079)',
              borderColor: '#85449A',
              borderWidth: '1',
              data: numberOfPosts //[2,3,5,3,6,7,8]
            },
            {
              label: 'My Rank',
              lineTension: 0.01,
              backgroundColor: 'rgba(148, 168, 182, 0.05)',
              borderColor: '#94A8B6',
              borderWidth: '2',
              data: rankPostion //[2,3,1,5,3,2,1]
            }
          ]
        }
    }
    },
  components: {
    leaderboard,
    ICountUp,
    userStats,
    topStats,
    editSignatureButton
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

.stats-container, .top-left {
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

.top-left{
    order: 1;
    width: 50%;
    padding:0px;
    height: 80%;
    margin:0px;
    justify-content: flex-start;
    align-items: center;
}
.top-left * {
     width:100%;
 }
.stats-container {
    width: 40%;
    order:2;
}


.leaderboard-container {
    order: 3;
    width: 50% ;
    padding:0px;
    height: 80%;
    margin:0px;
    justify-content: flex-start;
    align-items: flex-start;
}

}
</style>