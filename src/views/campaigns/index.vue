<template>
  <div class="main-section">
      
      <div class="card summary">
           <h2>Bitcointalk Signature Campaing</h2>
          <div class="this-campaign_info">
            <h1 class="stats-numbers"><ICountUp
            :startVal="0"
            :endVal="this.totalUsers"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4>Users</h4>
          </div>
          <div class="this-campaign_info">
            <h1 class="stats-numbers"><ICountUp
            :startVal="0"
            :endVal="this.totalPosts"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4>Posts</h4>
          </div>
           <div class="this-campaign_info">
            <h1 class="stats-numbers"><ICountUp
            :startVal="0"
            :endVal="this.myRanking"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4>Rank</h4>
          </div>
          <div class="this-campaign_info">
            <h1 class="stats-numbers"><ICountUp
            :startVal="0"
            :endVal="this.myActivity"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4>My Posts</h4>
          </div>
          
    
      </div>
      <div class="card leaderboard">
           <h2>Leaderboard</h2>
          <campaigns v-if="data.rankings" :rankings="data.rankings" :sitewide="data.sitewide" :username="user.username"/>
      </div>
  </div>
</template>

<script>
import forumActivityPosts from '../../components/forumActivity/forumStatsPosts.js';
import forumActivityUsers from '../../components/forumActivity/forumStatsUsers.js';
import campaigns from '../../components/campaigns/index.vue';
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
    getLeaderBoardData()
      .then(response => {
          this.data = response;
        //   this.forumstatsPosts = response.forumstats.posts
          console.log('response: ', response);
      })
      .catch(ex => {
        console.error(ex);
      })
      
    },
    methods: {
    populateUserData() {
        this.myRanking = this.userStats.overall_rank;
        this.totalUsers =  this.campaignStats.total_users;
        this.totalPosts =  this.campaignStats.total_posts;
        this.myActivity =  this.userStats.total_posts;

        }
    },
  components: {
    campaigns,
    forumActivityPosts,
    forumActivityUsers,
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
    justify-content: flex-start;
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

.card {
  width: 95%;
  height: auto;
  margin-bottom: 10px
}

campaigns {
    height: 100% !important;
}

.label {
    padding-left: 10px;
}
.b1 {
    width: 100%;
    background-color: #3F2069;
}

.b2 {
    width: 100%;
    background-color: #3196B4;
}
.summary {
    padding-top: 10%;
    width: 95% ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
     padding-bottom: 20px;
     min-height:150px;
}
.summary h2 {
    width: 100% !important;
}
.summary p {
    width: 50% !important;
}
 .forum {
    width: 100% ;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.forum * {
    width: 50% !important;
}
.forum h2 {
    width: 100% !important;
}

.this-campaign_info{
 width: 100px;
 min-height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}
.this-campaign_info>h2{
  margin: 0px;
}
.stats-numbers {
  width: 90%;
  font-weight: bolder;
  font-size: 55px;
  padding: 0px;
  margin: 0px;
  line-height:1;
  border-bottom: 1px solid #85449A;
  text-shadow: 2px 2px 2px black;
}
.leaderboard {
    width: 90% ;
    padding: 10px;
    padding-top: 10px;
  margin-bottom: 15%;
}
@media only screen and (min-width: 800px) {
.main-section {
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: space-evenly;
      align-items: center;
      padding-bottom:0;
}
 .leaderboard, .summary {
    width: 40% ;
    height: 70%;
    padding: 10px;
   margin:0px;
}
 .leaderboard * {
     width:100%;
    
     
 }

.summary { 
    padding-top: 0px;
    justify-content:center;
    align-items:flex-start;
     padding-bottom: 0px;
}


h1{
    width: 100%;
}

 }
</style>