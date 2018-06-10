<template>
  <div class="main-section">
      <h2 class="section-title">BITCOINTALK SIGNATURE CAMPAIGN</h2>
      <div class="top-left">
          <top-stats 
          class="top-stats" 
          v-if="$store.state.leaderboard.sitewide.total_users>0" 
          :campaignStats="$store.state.leaderboard.sitewide" 
          :localStats="$store.state.leaderboard.userstats"/>  
          <leaderboard class="leaderboard"/>
      </div>
        <div class="stats-container">
            <user-stats
            v-if="$store.state.userStats.sitewide.total_posts>=0"
            :campaignStats="$store.state.userStats.sitewide" 
            :localStats="$store.state.userStats.user_level"
            :profileLevel="$store.state.userStats.profile_level"
            :elements="$store.state.leaderboard.rankings"/>
            <edit-signature-button />
        </div>
  </div>
</template>

<script>
import leaderboard from '~/components/leaderboard/index.vue';
import userStats from '~/components/userStats.vue';
import topStats from '~/components/topStats.vue';
import editSignatureButton from '~/components/editSignatureButton.vue';
// import { getLeaderBoardData } from '~/services/leaderboard'; 
// import {retrieveStats } from '~/services/dashboard';
// import {retrieveUser } from '~/services/account';
import ICountUp from 'vue-countup-v2';
import axios from 'axios'


export default {
  async fetch ({ store }) {
    // TODO Merge copied code between dashboard & leaderboard
      const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token aa931858af5571bd2daf1836a3a9cc9177668c90'
      }

      const { data: leaderboardData } = await axios.get('http://localhost:8000/api/retrieve/leaderboard-data/', { headers })
      const { data: userStats } = await axios.get('http://localhost:8000/api/retrieve/stats/', { headers })

      store.commit('setLeaderboardData', leaderboardData)
      store.commit('setUserStats', userStats.stats)
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

.top-left {
    width: 100%;
    height: 60%;
    display:flex;
    flex-direction:column;
}

.stats-container {
    width: 100%;
    height: 40%;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    margin-bottom: 0px;
}

.top-stats {
   order:1;
}

.leaderboard{
    order:2;
    height: 80%;
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
    margin-bottom: 0px;
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