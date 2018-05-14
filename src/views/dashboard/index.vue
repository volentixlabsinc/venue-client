<template>
    <div class="main-section">
      <div v-if="profile_level_global" class="card my-campaign-container">
        <div v-if="profile_level_global" class=" forum" v-for="forumInfo in profile_level_forum" :key="forumInfo.User_ID">
         <forum :forumInfo = "forumInfo" :chart-data="datacollection"/>
          </div>
         <my-campaign :data="profile_level_global" />
      </div>
      
         
     
      <div v-if="profile_level_global" class="card all-campaigns-container">
        <all-campaigns :sitewide="sitewide" :data="data"/>
      </div>
      </div>
</template>

<script>
import {retrieveStats } from '../../service/dashboard';
import {retrieveNotifications } from '../../service/notifications';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import forum from './forum.vue';
import myCampaign from './myCampaign.vue';
import allCampaigns from './allCampaigns.vue';
import ICountUp from 'vue-countup-v2';

export default {

  name: 'dashboard',
  data () {
    return {
      data: null,
      sitewide: null,
      profile_level_forum: null,
      profile_level_global: null,
      datacollection: null,
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
    this.fetchStats();
     getLeaderBoardData()
      .then(response => {
          this.data = response;
      })
      .catch(ex => {
        console.error(ex);
      })
  },
  methods: {
    fetchStats() {
      retrieveStats()
    .then(response => {
      this.sitewide = response.stats.sitewide
      this.profile_level_forum = response.stats.profile_level
      this.profile_level_global = response.stats.user_level
    })
      .then(response => { this.fillData();})
    },
    fillData () {
        let numberOfPosts = [];
        let dates = [];
        let splitDate = '';
        let rankPostion = [];
          for (var i =0; i < this.profile_level_global.daily_stats.length; i++){
            numberOfPosts.push(this.profile_level_global.daily_stats[i].posts);
            rankPostion.push(this.profile_level_global.daily_stats[i].rank);
            splitDate = this.profile_level_global.daily_stats[i].date.split('-');
            dates.push(`${splitDate[1]}-${splitDate[2]}`); 
          }
          
        this.datacollection = {
         labels: dates,
          datasets: [
            {
              label: 'Number of Posts',
              lineTension: 0.01,
              backgroundColor: 'rgba(133, 68, 154, 0.079)',
              borderColor: '#85449A',
              borderWidth: '1',
              data: [2,3,5,3,6,7,8]//numberOfPosts
            },
            {
              label: 'My Rank',
              lineTension: 0.01,
              backgroundColor: 'rgba(148, 168, 182, 0.05)',
              borderColor: '#94A8B6',
              borderWidth: '2',
              data: [2,3,1,5,3,2,1]//rankPostion
            }
          ]
        }
      },
      
  },
  components: {
    forum,
    myCampaign,
    allCampaigns
  }

}
</script>

<style scoped>

.main-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  flex-wrap: no-wrap;
  overflow: scroll;
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

 .forum {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-shrink:0;
   width: 95%;
}
.my-campaign-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink:0;
  height: 70%;
  width: 100%;
}

.all-campaigns-container {
flex-shrink: 1;
height: 30%;
}
@media only screen and (min-width: 800px) {

.main-section {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    flex-wrap: wrap;
    padding-bottom:0px;
}

.my-campaign-container, .all-campaigns-container {
  order:1;
  width: 49%;
  height: 100%;
  margin: 0px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
    background-color: rgba(0, 0, 0, 0.2);

}
.my-campaign-container{
  background-color: rgba(0, 0, 0, 0.2);
}

.all-campaigns-container:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.forum{
  order:2;
  height: auto;
  width: auto;
  background-color: transparent;
  border: 0px;
  margin-bottom: 40px;
}

}
</style>

