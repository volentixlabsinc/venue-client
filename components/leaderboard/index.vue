<template>
    <div class=" leaderboard">
        <table v-if="data" v-for="(elements, key) in data.rankings" :key="key">
            <short-leaderboard-entry v-if="shortenedLeaderboard" :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/>
            <leaderboard-entry v-else :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/> 
        </table>
        
       <table v-else  v-for="(elements, key) in data.rankings" :key="key">
            <leaderboard-entry :elements="elements" :sitewide="data.sitewide" :myRank="myRank"/> 
       </table>
     
    </div>
</template>

<script>
// import { getLeaderBoardData } from '~/services/leaderboard'; 
// import {retrieveStats } from '~/services/dashboard';
import leaderboardEntry from "./leaderboardEntry";
import shortLeaderboardEntry from "./shortLeaderboardEntry";
import { readFromCookie } from '~/services/utils/browser-storage.js'
export default {
    props:{
        campaignStats: Object,
        localStats: Object,
        shortenedLeaderboard: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            toggleDescription: false,
            data: {},
            userStats: null,
            myRank:0
        }
    },
    // mounted() {
    //     var isAuth = readFromCookie(); 
    //     console.log('shortenedLeaderboard', this.shortenedLeaderboard);
    //     getLeaderBoardData()
    //         .then(response => {
    //             this.data = response;                        
    //         })
    //         .catch(ex => {
    //             console.error(ex);
    //         })

    //     if(isAuth) {
    //         retrieveStats()
    //         .then(response => {
    //             console.log('response: ', response);
               
    //             this.userStats = response.stats.user_level;
    //              if (this.userStats.overall_rank==null) {
    //                 this.myRank = 0;
    //             } else {
    //                 this.myRank = Number(this.userStats.overall_rank);
    //             }   
    //         })

    //     }
  
    // },
    components: {
        leaderboardEntry,
        shortLeaderboardEntry
    }
}
</script>


<style scoped>

.leaderboard {
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
}

.leaderboard::-webkit-scrollbar {
    width: 0px;
}

/* Track */
.leaderboard::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.leaderboard::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}

table {
    width: 100%;
    display: table;
    border-spacing: 0px;
    text-align: left;
}
</style>