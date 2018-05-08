<template>
    <div class="main-section">
      <div v-if="data" class="card my-campaign">
         <h2 class="my-campaign-title">My Campaign Overall Stats</h2>
         <div class="my-campaign_info">
          <h3>My ranking</h3>
          <h2>{{profile_level_global.overall_rank}}</h2>
        </div>

         <div class="my-campaign_info">
          <h3>My total tokens</h3>
          <h2>{{profile_level_global.total_tokens}}</h2>
        </div>
        
        <div class="my-campaign_info">
          <h3>My total Posts</h3>
          <h2>{{profile_level_global.total_posts}}</h2>
        </div>
        <div class="my-campaign_info">
          <h3>My total Points</h3>
          <h2>{{profile_level_global.total_points}}</h2>
        </div>
      </div>
      <div v-if="data" class=" my-activity" v-for="forumInfo in profile_level_forum" :key="forumInfo.User_ID">
        <div class="forum">
          <h2 >Forum activity</h2>
          <forum :forumInfo = "forumInfo" />
        </div>
      </div>
      <div v-if="data" class="card all-campaigns">
        
        <h2 class="my-campaign-title">Campaign VTX</h2>
        <div class="logo">
         <img id="token-icon" src="/img/logos/VTX-Token-icon.png"/>
         </div>
        <div class="campaigns_info">
          <h3>Total VTX</h3>
          <h3>{{sitewide.available_tokens}}</h3>
        </div>
        <div class="campaigns_info">
          <h3>Participants</h3>
          <h3>{{sitewide.total_users}}</h3>
        </div>
        <div class="campaigns_info">
          <h3>Total Posts</h3>
          <h3>{{sitewide.total_posts}}</h3>
        </div>
      </div>
      </div>
</template>

<script>
import {retrieveStats } from '../../service/dashboard';
import {retrieveNotifications } from '../../service/notifications';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import forum from './forum.vue';

export default {

  name: 'dashboard',
  data () {
    return {
      data: null,
      sitewide: {},
      profile_level_forum: [],
      profile_level_global: {}
    }
  },
  mounted(){
    this.fetchStats();
    this.fetchLeaderBoard();
    this.fetchNotifications();

  },
  methods: {
    fetchStats() {
      retrieveStats()
    .then(response => {
      this.sitewide = response.stats.sitewide
      this.profile_level_forum = response.stats.profile_level
      this.profile_level_global = response.stats.user_level
      console.log('sitewide: ', response);
    })
    },
    fetchNotifications() {
     retrieveNotifications()
      .then(response => {
        console.log('retrieveNotifications', response);
      })
    },
    fetchLeaderBoard() {
     getLeaderBoardData()
      .then(response => {
          this.data = response;
          console.log('this.data: ', this.data);
      })
      .catch(ex => {
        console.error(ex);
      });
    },
    
  },
  components: {
    forum
  }

}
</script>

<style scoped>

.main-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.card {
  box-shadow: none;
  height:auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-top:10px;
  margin-bottom:10px
}
p {
  font-size: 18px;
}

.my-campaign{
 padding-top: 10%;
 flex-wrap:wrap;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 padding-bottom: 20px;
}

.my-campaign-title{
  width: 100%;
}

.my-campaign_info{
 width: 40%;
 min-height: 180px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}
.my-campaign_info>h2{
  margin: 0px;
}
.forum {
  color: white;
  width: 100%;
  flex: 0 0 auto;
  margin: 0px;
  flex-shrink: 0;

}
 .my-activity {
   border-top: 1px solid #85449A;
  border-bottom: 1px solid #85449A;
  background-color:rgba(133, 68, 154, 0.079);
  flex-shrink: 0;
  height:30%;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: nowrap;
   overflow-x: auto;
  overflow-y: hidden;
    
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
}

.my-activity::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.my-activity::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.my-activity::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}
.logo{width: 100%; height: auto;}
#token-icon {
  height:60px;
}
.campaigns_info {
  width: 30%;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}

.all-campaigns {
  padding-top: 10px;
  margin-bottom: 15%;
  flex-wrap:wrap;
 flex-direction: row;
 justify-content: center;
 align-items: center;
}
@media only screen and (min-width: 600px) {

.main-section {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    flex-wrap: wrap;
}
.card {
  height:49%;
  width: 49%;
  margin: 0px;
}
.my-campaign{
  order:1;
  padding: 0px;
}
.all-campaigns{
  order:2;
  padding: 0px;
}
.my-activity{
  order:3;
   height: auto;
   width: 100%;
   justify-content: center;
   padding-bottom: 20px;
}
.my-campaign_info{
  height: 40%;
}

.forum {
  width: auto;
  height: auto;
  flex: 0 0 auto;
  margin: 0px;

}

#token-icon {
  height:80px;
}

}

</style>

